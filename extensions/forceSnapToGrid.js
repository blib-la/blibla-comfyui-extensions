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
 * Always snap to grid
 */

const forceSnapToGridName = "Failfast.forceSnapToGrid";

app.registerExtension({
  name: forceSnapToGridName,
  async init(app) {
    app.ui.settings.addSetting({
      id: forceSnapToGridName,
      name: "Force Snap to Grid",
      type: "boolean",
      tooltip: "When dragging nodes they will be aligned to the grid.",
      defaultValue: false,
      onChange(value) {
        app.canvas.align_to_grid = value;
      },
    });
  },
});
