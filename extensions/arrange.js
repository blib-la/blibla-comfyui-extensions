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
import { $el } from "/scripts/ui.js";

/**
 * Render Shadow
 */

const alignName = "Failfast.alignNodes";

app.registerExtension({
  name: alignName,
  async setup(app) {
    const getCanvasMenuOptions = LGraphCanvas.prototype.getCanvasMenuOptions;
    LGraphCanvas.prototype.getCanvasMenuOptions = function () {
      const menuOptions = getCanvasMenuOptions.apply(this, arguments);

      menuOptions.push(
        null,
        {
          content: "Arrange (vertical)",
          callback: () =>
            app.graph.arrange(
              LiteGraph.CANVAS_GRID_SIZE * 4,
              LiteGraph.VERTICAL_LAYOUT
            ),
        },
        {
          content: "Arrange (horizontal)",
          callback: () => app.graph.arrange(LiteGraph.CANVAS_GRID_SIZE * 2),
        }
      );

      return menuOptions;
    };
  },
});
