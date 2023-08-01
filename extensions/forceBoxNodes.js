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
 * Render all nodes as box
 */

const forceBoxName = "Failfast.forceBoxNodes";

app.registerExtension({
  name: forceBoxName,
  async init(app) {
    app.ui.settings.addSetting({
      id: forceBoxName,
      name: "Force Box Nodes",
      type: "boolean",
      tooltip: "Nodes will always be boxes.",
      defaultValue: false,
      onChange(value) {
        app.canvas.round_radius = value ? 0 : 8;
        app.graph.setDirtyCanvas(true, true);
      },
    });
  },
});
