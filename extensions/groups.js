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
import { app } from "../scripts/app.js";
import { $el } from "../scripts/ui.js";

/**
 * Render Shadow
 */

const groupsName = "Failfast.groups";

app.registerExtension({
  name: groupsName,
  async setup(app) {
    const getGroupMenuOptions = LGraphCanvas.prototype.getGroupMenuOptions;
    let move = null;
    LGraphCanvas.prototype.getGroupMenuOptions = function (group) {
      const menuOptions = getGroupMenuOptions.apply(this, arguments);
      menuOptions.push(
        null,
        move
          ? {
              content: "Unfreeze",
              callback: () => {
                group.recomputeInsideNodes();
                group.move = move;
                move = null;
                group._nodes.forEach((node) => {
                  node.flags.pinned = false;
                });
              },
            }
          : {
              content: "Freeze",
              callback: () => {
                group.recomputeInsideNodes();
                move = group.move;
                group.move = () => {};

                group._nodes.forEach((node) => {
                  node.flags.pinned = true;
                });
              },
            },
      );

      return menuOptions;
    };
  },
});
