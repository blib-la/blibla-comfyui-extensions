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
 * Connections Width
 */

const connectionsWidthName = "Failfast.connectionsWidth";

app.registerExtension({
  name: connectionsWidthName,
  async init(app) {
    app.ui.settings.addSetting({
      id: connectionsWidthName,
      name: "Connectors Width",
      type: "slider",
      attrs: {
        min: 2,
        max: 8,
      },
      tooltip: "The width of connector lines.",
      defaultValue: 3,
      onChange(value) {
        app.canvas.connections_width = +value;
        app.graph.setDirtyCanvas(true, true);
      },
    });
  },
});
