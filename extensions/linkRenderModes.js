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

const linkRenderModesName = "Failfast.linkRenderModes";

app.registerExtension({
  name: linkRenderModesName,
  async init() {
    if (LiteGraph?.LINK_RENDER_MODES) {
      LiteGraph.LINK_RENDER_MODES[3] = "Hidden";
    }
  },
});
