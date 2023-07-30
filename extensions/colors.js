/**
 * Coded with love by Failfa.st
 * LICENSE: AGPL 3.0
 * https://github.com/failfa-st/failfast-comfyui-extensions/blob/main/LICENSE
 *
 * Visit https://github.com/failfa-st/failfast-comfyui-extensions for more info
 *
 * Hopmepage:  https://failfa.st
 * GitHub: https://github.com/failfa-st
 * Discord: https://discord.com/invite/m3TBB9XEkb
 */
import { app } from "../../../scripts/app.js";
import { $el } from "../../../scripts/ui.js";

function getColor(index, lengthOfItems, l = 0.5) {
  // Normalize the index value to be between 0 and 360 for full spectrum of hue
  const hue = Math.floor((index / lengthOfItems) * 360);

  // Convert the hue to RGB using helper function
  const [r, g, b] = hslToRgb(hue / 360, 0.3, l);

  // Convert RGB to Hex
  return rgbToHex(r, g, b);
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    const hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hslToHex(h, s, l) {
  const [r, g, b] = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

function rainbowify(app) {
  // Sort by position on canvas
  const nodes = [...app.graph._nodes].sort((a, b) => {
    if (a.pos[1] > b.pos[1]) {
      return 1;
    }
    if (a.pos[1] < b.pos[1]) {
      return -1;
    }
    return a.pos[0] - b.pos[0];
  });

  nodes.forEach((node, index) => {
    node.bgcolor = getColor(index, nodes.length, 0.3);
    node.color = getColor(index, nodes.length, 0.2);
  });
  app.graph.change();
}

function uncolor(app) {
  app.graph._nodes.forEach((node) => {
    if (node.type.toLowerCase() === "note") {
      const [h, s, l] = colors.note;
      const bgcolor = hslToHex(h / 360, s, l);
      const color = hslToHex(h / 360, s, l - 0.1);
      node.bgcolor = bgcolor;
      node.color = color;
    } else {
      node.bgcolor = hslToHex(0, 0, 0.3);
      node.color = hslToHex(0, 0, 0.2);
    }
  });
  app.graph.change();
}

const colors = {
  loader: [0, 0.4, 0.3],
  clip: [20, 0.4, 0.3],
  note: [40, 0.4, 0.3],
  sampler: [60, 0.4, 0.3],
  controlnet: [80, 0.4, 0.3],
  vae: [100, 0.4, 0.3],
  conditioning: [120, 0.4, 0.3],
  latent: [140, 0.4, 0.3],
  mask: [160, 0.4, 0.3],
  image: [180, 0.4, 0.3],
  style: [200, 0.4, 0.3],
  primitive: [220, 0.4, 0.3],
  gligen: [240, 0.4, 0.3],
};

function colorNode(node) {
  const colorRef = Object.entries(colors).find(([key]) => {
    return node.type.toLowerCase().includes(key);
  });
  if (colorRef) {
    const [h, s, l] = colorRef[1];
    const bgcolor = hslToHex(h / 360, s, l);
    const color = hslToHex(h / 360, s, l - 0.1);
    node.bgcolor = bgcolor;
    node.color = color;
  }
}
function colorByType(app) {
  app.graph._nodes.forEach((node) => {
    colorNode(node);
  });
  app.graph.change();
}

function colorPositiveNegative(app) {
  app.graph._nodes.forEach((node) => {
    // const onPropertyChanged = node.onPropertyChanged;
    // node.onPropertyChanged = function () {};
    if (node.title.toLowerCase().includes("positive")) {
      const bgcolor = hslToHex(120 / 360, 0.4, 0.3);
      const color = hslToHex(120 / 360, 0.4, 0.2);
      node.bgcolor = bgcolor;
      node.color = color;
    } else if (node.title.toLowerCase().includes("negative")) {
      const bgcolor = hslToHex(0, 0.4, 0.3);
      const color = hslToHex(0, 0.4, 0.2);
      node.bgcolor = bgcolor;
      node.color = color;
    }
  });
  app.graph.change();
}

/**
 * Colors
 */
let afterChange;
function setColorMode(value, app) {
  switch (value) {
    case 1:
      app.graph.afterChange = function () {
        uncolor(app);
        return applyChanges?.apply(this, arguments);
      };
      uncolor(app);
      break;
    case 2:
      app.graph.afterChange = function () {
        rainbowify(app);
        return applyChanges?.apply(this, arguments);
      };
      rainbowify(app);
      break;
    case 3:
      app.graph.afterChange = function () {
        colorByType(app);
        return applyChanges?.apply(this, arguments);
      };
      colorByType(app);
      break;
    case 4:
      app.graph.afterChange = function () {
        colorPositiveNegative(app);
        return applyChanges?.apply(this, arguments);
      };
      colorPositiveNegative(app);
      break;
    default:
      app.graph.afterChange = afterChange;
      break;
  }
}

const colorModes = ["default", "plain", "rainbow", "type", "positive/negative"];
const colorsName = "Failfast.colors";
let loading = false;
app.registerExtension({
  name: colorsName,
  async setup(app) {
    const value = +(
      window.localStorage.getItem(`Comfy.Settings.${colorsName}`) ?? "0"
    );
    setColorMode(value, app);
  },
  loadedGraphNode(node, app) {
    if (!loading) {
      loading = true;
      setTimeout(() => {
        loading = false;

        const value = +(
          window.localStorage.getItem(`Comfy.Settings.${colorsName}`) ?? "0"
        );
        setColorMode(value, app);
      }, 500);
    }
  },
  async init(app) {
    afterChange = app.graph.afterChange;
    app.ui.settings.addSetting({
      id: colorsName,
      name: "Color Mode",
      type(name, setter, value) {
        return $el("tr", [
          $el("td", [
            $el("label", {
              for: colorsName.replaceAll(".", "-"),
              textContent: "Color Mode",
            }),
          ]),

          $el("td", [
            $el(
              "select",
              {
                id: colorsName.replaceAll(".", "-"),
                onchange: (event) => {
                  setter(+event.target.value);
                },
              },
              colorModes.map((mode, index) => {
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
      tooltip: "Automatic color modes for nodes.",
      defaultValue: 2,
      onChange(value) {
        setColorMode(value, app);
      },
    });
  },
});
