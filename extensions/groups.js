/**
 * Coded with love by Failfa.st
 * LICENSE: AGPL 3.0
 * https://github.com/failfa-st/failfast-comfyui-extensions/blob/main/LICENSE
 *
 * Visit https://github.com/failfa-st/failfast-comfyui-extensions for more info
 *
 * Homepage:  https://failfa.st
 * GitHub: https://github.com/failfa-st
 * Discord: https://discord.com/invite/m3TBB9XEkb
 */
import { app } from "/scripts/app.js";

/**
 * Render Shadow
 */

const groupsName = "Failfast.groups";

app.registerExtension({
  name: groupsName,
  async setup(app) {
    const move = {};
    app.graph._groups.forEach((group, index) => {
      group.id = index;
    });
    const getGroupMenuOptions = LGraphCanvas.prototype.getGroupMenuOptions;
    LGraphCanvas.prototype.getGroupMenuOptions = function (group) {
      const menuOptions = getGroupMenuOptions.apply(this, arguments);
      menuOptions.push(
        null,
        move[group.id]
          ? {
              content: "Unfreeze",
              callback: () => {
                group.recomputeInsideNodes();
                group.move = move[group.id];
                move[group.id] = null;
                group._nodes.forEach((node) => {
                  node.flags.pinned = false;
                });
              },
            }
          : {
              content: "Freeze",
              callback: () => {
                group.recomputeInsideNodes();
                move[group.id] = group.move;
                group.move = () => {};

                group._nodes.forEach((node) => {
                  node.flags.pinned = true;
                });
              },
            }
      );

      return menuOptions;
    };
    const getCanvasMenuOptions = LGraphCanvas.prototype.getCanvasMenuOptions;
    LGraphCanvas.prototype.getCanvasMenuOptions = function () {
      const menuOptions = getCanvasMenuOptions.apply(this, arguments);

      menuOptions.push(
        null,
        {
          content: "Freeze all",
          callback: () => {
            app.graph._groups.forEach((group) => {
              group.recomputeInsideNodes();
              if (!move[group.id]) {
                move[group.id] = group.move;
                group.move = () => {};
              }
              group._nodes.forEach((node) => {
                node.flags.pinned = true;
              });
            });
          },
        },
        {
          content: "Unfreeze all",
          callback: () => {
            app.graph._groups.forEach((group) => {
              group.recomputeInsideNodes();
              if (move[group.id]) {
                group.move = move[group.id];
                move[group.id] = null;
              }
              group._nodes.forEach((node) => {
                node.flags.pinned = false;
              });
            });
          },
        }
      );

      return menuOptions;
    };
  },
});
