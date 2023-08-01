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

const reroutesName = "Failfast.reroutes";

app.registerExtension({
  name: reroutesName,
  async setup() {
    const getNodeMenuOptions = LGraphCanvas.prototype.getNodeMenuOptions;
    LGraphCanvas.prototype.getNodeMenuOptions = function (node) {
      const options = getNodeMenuOptions.apply(this, arguments);
      if (node.type !== "Reroute") {
        return options;
      }
      node._title = node.title;
      Object.defineProperty(node, "title", {
        get() {
          return this._title;
        },
        set(value) {
          this._title = value;
          if (node.properties.showTitle) {
            node.outputs[0].label = value;
          }
        },
      });

      options.unshift({
        content: node.properties.showTitle ? "Hide Title" : "Show Title",
        callback: () => {
          node.outputs[0].label = node.properties.showTitle
            ? undefined
            : node.title;
          node.properties.showTitle = !node.properties.showTitle;
        },
      });
      return options;
    };
  },
});
