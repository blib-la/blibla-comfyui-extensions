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
const mini = [34, 26];
const micro = [10, 10];
const big = [75, 26];
function miniReroute(node) {
  if (node.type !== "Reroute") {
    return;
  }
  node._size = node.size;
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

  if (node.properties.microdot) {
    Object.defineProperty(node, "size", {
      get() {
        return this._size;
      },
      set() {},
    });
    node._size[0] = micro[0];
    node._size[1] = micro[1];
  } else if (node.properties.dot) {
    Object.defineProperty(node, "size", {
      get() {
        return this._size;
      },
      set() {},
    });
    node._size[0] = mini[0];
    node._size[1] = mini[1];
  }
}

app.registerExtension({
  name: reroutesName,
  async setup(app) {
    const onNodeAdded = app.graph.onNodeAdded;
    app.graph.onNodeAdded = function (node) {
      if (node.type !== "Reroute") {
        return onNodeAdded?.apply(this, arguments);
      }

      miniReroute(node);
      return onNodeAdded?.apply(this, arguments);
    };
    app.graph._nodes.forEach((node) => {
      if (node.type === "Reroute") {
        miniReroute(node);
      }
    });
    const getNodeMenuOptions = LGraphCanvas.prototype.getNodeMenuOptions;
    LGraphCanvas.prototype.getNodeMenuOptions = function (node) {
      const options = getNodeMenuOptions.apply(this, arguments);
      if (node.type !== "Reroute") {
        return options;
      }

      options.unshift({
        content: node.properties.showTitle ? "Hide Title" : "Show Title",
        callback() {
          node.outputs[0].label = node.properties.showTitle
            ? undefined
            : node.title;
          node.properties.showTitle = !node.properties.showTitle;
        },
      });

      options.push(
        {
          content: node.properties.dot ? "dot off" : "dot on",
          callback() {
            if (node.properties.dot) {
              node._size[0] = node.properties.microdot ? micro[0] : big[0];
              node._size[1] = node.properties.microdot ? micro[1] : big[1];
              if (node.properties.microdot) {
                Object.defineProperty(node, "size", {
                  get() {
                    return this._size;
                  },
                  set() {},
                });
              } else {
                Object.defineProperty(node, "size", {
                  get() {
                    return this._size;
                  },
                  set(value) {
                    this._size = value;
                  },
                });
              }
            } else {
              node._size[0] = node.properties.microdot ? micro[0] : mini[0];
              node._size[1] = node.properties.microdot ? micro[1] : mini[1];
              Object.defineProperty(node, "size", {
                get() {
                  return this._size;
                },
                set() {},
              });
            }
            node.properties.dot = !node.properties.dot;
            node.setDirtyCanvas(true, true);
          },
        },
        {
          content: node.properties.microdot ? "microdot off" : "microdot on",
          callback() {
            if (node.properties.microdot) {
              node._size[0] = node.properties.dot ? mini[0] : big[0];
              node._size[1] = node.properties.dot ? mini[1] : big[1];
              if (node.properties.dot) {
                Object.defineProperty(node, "size", {
                  get() {
                    return this._size;
                  },
                  set() {},
                });
              } else {
                Object.defineProperty(node, "size", {
                  get() {
                    return this._size;
                  },
                  set(value) {
                    this._size = value;
                  },
                });
              }
            } else {
              node._size[0] = micro[0];
              node._size[1] = micro[1];
              Object.defineProperty(node, "size", {
                get() {
                  return this._size;
                },
                set() {},
              });
            }
            node.properties.microdot = !node.properties.microdot;
            node.setDirtyCanvas(true, true);
          },
        },
      );
      return options;
    };
  },
});
