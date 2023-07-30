/**
 * Coded with love by Failfa.st
 * LICENSE: AGPL 3.0
 * https://github.com/failfa-st/comfyui-extensions/blob/main/LICENSE
 *
 * Visit https://github.com/failfa-st/comfyui-extensions for more info
 *
 * Hopmepage:  https://failfa.st
 * GitHub: https://github.com/failfa-st
 * Discord: https://discord.com/invite/m3TBB9XEkb
 */
import { app } from "../scripts/app.js";
import { $el } from "../scripts/ui.js";

/**
 * Toggle links render mode
 */

const linksRenderModeName = "Failfast.linksRenderMode";

const renderModes = ["straight", "small curve", "curve"];

const linksRenderMode = {
  name: linksRenderModeName,
  async setup(app) {
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
                  setter(event.target.value);
                },
              },
              renderModes.map((mode, index) => {
                return $el("option", {
                  textContent: mode,
                  value: index,
                  selected: index === +value,
                });
              })
            ),
          ]),
        ]);
      },
      tooltip: "Render mode of connector lines",
      defaultValue: 2,
      onChange(value) {
        app.canvas.links_render_mode = value;
        app.graph.change();
      },
    });
  },
};

app.registerExtension(linksRenderMode);

/**
 * Always snap to grid
 */

const forceSnapToGridName = "Failfast.forceSnapToGrid";

const forceSnapToGrid = {
  name: forceSnapToGridName,
  async setup(app) {
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
};

app.registerExtension(forceSnapToGrid);

/**
 * Render all nodes as box
 */

const forceBoxName = "Failfast.forceBox";

const forceBox = {
  name: forceBoxName,
  async setup(app) {
    app.ui.settings.addSetting({
      id: forceBoxName,
      name: "Force Box",
      type: "boolean",
      tooltip: "Nodes will always be boxes.",
      defaultValue: false,
      onChange(value) {
        app.canvas.round_radius = value ? 0 : 8;
        app.graph.change();
      },
    });
  },
};

app.registerExtension(forceBox);

/**
 * Render Shadow
 */

const renderShadowsName = "Failfast.renderShadows";

const renderShadows = {
  name: renderShadowsName,
  async setup(app) {
    app.ui.settings.addSetting({
      id: renderShadowsName,
      name: "Render Node shadows",
      type: "boolean",
      tooltip: "Show/hide shadows of nodes",
      defaultValue: true,
      onChange(value) {
        app.canvas.render_shadows = value;
        app.graph.change();
      },
    });
  },
};

app.registerExtension(renderShadows);

/**
 * Render Shadow
 */

const connectionsWidthName = "Failfast.connectionsWidth";

const connectionsWidth = {
  name: connectionsWidthName,
  async setup(app) {
    app.ui.settings.addSetting({
      id: connectionsWidthName,
      name: "Connectors Width",
      type: "slider",
      attrs: {
        min: 2,
        max: 8,
      },
      tooltip: "The with of connector lines.",
      defaultValue: 3,
      onChange(value) {
        app.canvas.connections_width = +value;
        app.graph.change();
      },
    });
  },
};

app.registerExtension(connectionsWidth);

/**
 * Pin all nodes on canvas
 */

const pinAllName = "Failfast.pinAll";

const pinAll = {
  name: pinAllName,
  async setup(app) {
    const pinButton = document.createElement("button");
    const unpinButton = document.createElement("button");
    pinButton.innerText = "Pin all Nodes";
    unpinButton.innerText = "Unpin all Nodes";

    pinButton.onclick = () => {
      app.graph._nodes.forEach((node) => {
        node.flags.pinned = true;
      });
    };
    unpinButton.onclick = () => {
      app.graph._nodes.forEach((node) => {
        node.flags.pinned = false;
      });
    };
    app.ui.menuContainer.append(pinButton, unpinButton);
  },
};
app.registerExtension(pinAll);
