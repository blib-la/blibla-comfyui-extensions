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

const imagesName = "Failfast.images";

function copyImageToClipboard(img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  canvas.toBlob(function (blob) {
    const items = [new ClipboardItem({ "image/png": blob })];
    navigator.clipboard.write(items);
  });
  canvas.remove();
}
app.registerExtension({
  name: imagesName,
  async init(app) {
    const getNodeMenuOptions = LGraphCanvas.prototype.getNodeMenuOptions;
    LGraphCanvas.prototype.getNodeMenuOptions = function (node) {
      const options = getNodeMenuOptions.apply(this, arguments);
      const isImageMenu = options.some(
        (option) => option?.content === "Save Image",
      );
      if (isImageMenu) {
        options.splice(2, 0, {
          content: "Copy Image",
          callback() {
            const [img] = node.imgs;
            if (img) {
              copyImageToClipboard(img);
            }
          },
        });
      }
      return options;
    };
  },
});
