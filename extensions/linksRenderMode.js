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
 * Toggle links render mode
 */

const linksRenderModeName = "Failfast.linksRenderMode";
const renderModes = ["straight", "angled", "curve", "hidden"];

app.registerExtension({
  name: linksRenderModeName,
  async init(app) {
    app.ui.settings.addSetting({
      id: linksRenderModeName,
      name: "Links Render Mode",
      type(name, setter, value) {
        return $el("tr", [
          $el("td", [
            $el("label", {
              for: linksRenderModeName.replaceAll(".", "-"),
              textContent: "Links Render Mode",
            }),
          ]),

          $el("td", [
            $el(
              "select",
              {
                id: linksRenderModeName.replaceAll(".", "-"),
                onchange: (event) => {
                  setter(+event.target.value);
                },
              },
              renderModes.map((mode, index) => {
                return $el("option", {
                  textContent: mode,
                  value: index,
                  selected: index === +value,
                });
              }),
            ),
          ]),
        ]);
      },
      tooltip: "Render mode of connector lines",
      defaultValue: 2,
      onChange(value) {
        app.canvas.links_render_mode = +value;
        app.graph.change();
      },
    });
  },
});
