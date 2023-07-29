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

/**
 * Local storage powered store
 */
class Store {
  links_render_mode = 0;
  key = `Comfy.extension`;
  defaultState = {};
  constructor(key, defaultState) {
    this.key = `Comfy.${key}`;
    this.defaultState = defaultState;
  }
  get(key) {
    try {
      return JSON.parse(window.localStorage.getItem(this.key))[key];
    } catch {
      this.set(this.defaultState);
      return this.defaultState[key];
    }
  }
  set(key, value) {
    const state = JSON.parse(
      window.localStorage.getItem(this.key) ?? JSON.stringify(this.defaultState)
    );
    state[key] = value;
    return window.localStorage.setItem(this.key, JSON.stringify(state));
  }
  merge(state) {
    return window.localStorage.setItem(
      this.key,
      JSON.stringify({
        ...this.this.get(),
        ...state,
      })
    );
  }
}

/**
 * Toggle links render mode
 */

const linkRenderModeName = "Failfast.Settings.LinkRenderMode";

const renderModes = ["straight", "small curve", "curve"];

const linkRenderMode = {
  name: linkRenderModeName,
  async setup(app) {
    const store = new Store(linkRenderModeName, {
      links_render_mode: 2,
    });

    // Setup elements
    const row = document.createElement("tr");
    const select = document.createElement("select");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const label = document.createElement("label");

    // Populate elements
    row.append(cell1, cell2);
    cell1.append(label);
    cell2.append(select);
    select.append(
      ...renderModes.map((mode, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.label = mode;
        option.innerText = mode;
        return option;
      })
    );
    label.innerText = "Links Render Mode";

    // Configure elements
    const inputId = "Comfy-linksRenderNode";
    label.setAttribute("for", inputId);
    select.setAttribute("id", inputId);

    // Event listeners
    select.onchange = (event) => {
      const links_render_mode = Number.parseInt(event.target.value, 10);
      store.set("links_render_mode", links_render_mode);
      app.canvas.links_render_mode = links_render_mode;
      app.graph.change();
    };

    // Add setting to panel
    app.ui.settings.settings.push({
      render() {
        return row;
      },
    });

    // Init (load from storage)
    const links_render_mode = store.get("links_render_mode");
    select.value = links_render_mode;
    app.canvas.links_render_mode = links_render_mode;
  },
};

app.registerExtension(linkRenderMode);

/**
 * Always snap to grid
 */

const forceSnapToGridName = "Failfast.Settings.forceSnapToGrid";

const forceSnapToGrid = {
  name: forceSnapToGridName,
  async setup(app) {
    const store = new Store(forceSnapToGridName, {
      align_to_grid: false,
    });

    // Setup elements
    const row = document.createElement("tr");
    const checkbox = document.createElement("input");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const label = document.createElement("label");

    // Populate elements
    row.append(cell1, cell2);
    cell1.append(label);
    cell2.append(checkbox);

    label.innerText = "Force Snap to Grid";

    // Configure elements
    const inputId = "Comfy-forceSnapToGrid";
    label.setAttribute("for", inputId);
    checkbox.setAttribute("id", inputId);
    checkbox.type = "checkbox";

    // Event listeners
    checkbox.onchange = (event) => {
      const align_to_grid = event.target.checked;
      store.set("align_to_grid", align_to_grid);
      app.canvas.align_to_grid = align_to_grid;
    };

    // Add setting to panel
    app.ui.settings.settings.push({
      render() {
        return row;
      },
    });

    // Init (load from storage)
    const align_to_grid = store.get("align_to_grid");
    checkbox.checked = align_to_grid;
    app.canvas.align_to_grid = align_to_grid;
  },
};

app.registerExtension(forceSnapToGrid);

/**
 * Render all nodes as box
 */

const forceBoxName = "Failfast.Settings.forceBox";

const forceBox = {
  name: forceBoxName,
  async setup(app) {
    const store = new Store(forceBoxName, {
      round_radius: 8,
    });

    // Setup elements
    const row = document.createElement("tr");
    const checkbox = document.createElement("input");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const label = document.createElement("label");

    // Populate elements
    row.append(cell1, cell2);
    cell1.append(label);
    cell2.append(checkbox);

    label.innerText = "Force Box Shape";

    // Configure elements
    const inputId = "Comfy-forceBox";
    label.setAttribute("for", inputId);
    checkbox.setAttribute("id", inputId);
    checkbox.type = "checkbox";

    // Event listeners
    checkbox.onchange = (event) => {
      const round_radius = event.target.checked ? 0 : 8;
      store.set("round_radius", round_radius);
      app.canvas.round_radius = round_radius;
      app.graph.change();
    };

    // Add setting to panel
    app.ui.settings.settings.push({
      render() {
        return row;
      },
    });

    // Init (load from storage)
    const round_radius = store.get("round_radius");
    checkbox.checked = round_radius === 0;
    app.canvas.round_radius = round_radius;
  },
};

app.registerExtension(forceBox);

/**
 * Render Shadow
 */

const renderShadowsName = "Failfast.Settings.renderShadows";

const renderShadows = {
  name: renderShadowsName,
  async setup(app) {
    const store = new Store(renderShadowsName, {
      render_shadows: true,
    });

    // Setup elements
    const row = document.createElement("tr");
    const checkbox = document.createElement("input");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const label = document.createElement("label");

    // Populate elements
    row.append(cell1, cell2);
    cell1.append(label);
    cell2.append(checkbox);

    label.innerText = "Render shadows";

    // Configure elements
    const inputId = "Comfy-renderShadows";
    label.setAttribute("for", inputId);
    checkbox.setAttribute("id", inputId);
    checkbox.type = "checkbox";

    // Event listeners
    checkbox.onchange = (event) => {
      const render_shadows = event.target.checked;
      store.set("render_shadows", render_shadows);
      app.canvas.render_shadows = render_shadows;
      app.graph.change();
    };

    // Add setting to panel
    app.ui.settings.settings.push({
      render() {
        return row;
      },
    });

    // Init (load from storage)
    const render_shadows = store.get("render_shadows");
    checkbox.checked = render_shadows;
    app.canvas.render_shadows = render_shadows;
    app.canvas.render_shadows = render_shadows;
  },
};

app.registerExtension(renderShadows);

/**
 * Render Shadow
 */

const connectionsWidthName = "Failfast.Settings.connectionsWidth";

const connectionsWidth = {
  name: connectionsWidthName,
  async setup(app) {
    const store = new Store(connectionsWidthName, {
      connections_width: 3,
    });

    // Setup elements
    const row = document.createElement("tr");
    const range = document.createElement("input");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const label = document.createElement("label");

    // Populate elements
    row.append(cell1, cell2);
    cell1.append(label);
    cell2.append(range);

    label.innerText = "Connections Width";

    // Configure elements
    const inputId = "Comfy-connectionsWidth";
    label.setAttribute("for", inputId);
    range.setAttribute("id", inputId);
    range.setAttribute("min", 2);
    range.setAttribute("max", 8);
    range.setAttribute("step", 1);
    range.type = "range";

    // Event listeners
    range.onchange = (event) => {
      const connections_width = Number.parseInt(event.target.value, 10);
      store.set("connections_width", connections_width);
      app.canvas.connections_width = connections_width;
      app.graph.change();
    };

    // Add setting to panel
    app.ui.settings.settings.push({
      render() {
        return row;
      },
    });

    // Init (load from storage)
    const connections_width = store.get("connections_width");
    range.value = connections_width;
    app.canvas.connections_width = connections_width;
    app.canvas.connections_width = connections_width;
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
