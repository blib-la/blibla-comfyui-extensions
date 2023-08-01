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
 * Font size of prompt fields
 */

const connectionsWidthName = "Failfast.textFields";

app.registerExtension({
  name: connectionsWidthName,
  async init(app) {
    const style = $el("style");
    document.body.append(style);
    app.ui.settings.addSetting({
      id: connectionsWidthName,
      name: "Font size for textareas",
      type: "slider",
      attrs: {
        min: 10,
        max: 24,
      },
      tooltip: "The size of the font in prompts.",
      defaultValue: 10,
      onChange(value) {
        style.innerText = `.comfy-multiline-input {font-size: ${value}px}`;
      },
    });
  },
});
