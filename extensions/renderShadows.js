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

const renderShadowsName = "Failfast.renderShadows";

app.registerExtension({
  name: renderShadowsName,
  async init(app) {
    app.ui.settings.addSetting({
      id: renderShadowsName,
      name: "Render Node shadows",
      type: "boolean",
      tooltip: "Show/hide shadows of nodes",
      defaultValue: true,
      onChange(value) {
        app.canvas.render_shadows = value;
        app.graph.setDirtyCanvas(true, true);
      },
    });
  },
});
