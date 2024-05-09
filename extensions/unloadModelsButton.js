import { app } from "/scripts/app.js";
import { $el } from "/scripts/ui.js";

const nodeName = "Failfast.unloadModels";

const button = $el(
  "button",
  {
    onclick() {
      fetch("/free", {
        method: "POST",
        body: JSON.stringify({ unload_models: true }),
        headers: { "Content-Type": "application/json" },
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  ["Unload Models"]
);

app.registerExtension({
  name: nodeName,
  async init(app) {
    app.ui.menuContainer.append(button);
  },
});
