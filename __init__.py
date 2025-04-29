import os
import nodes

# WEB_DIRECTORY = "./extensions"
nodes.EXTENSION_WEB_DIRS["blibla-comfyui-extensions"] = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "extensions"
)

NODE_CLASS_MAPPINGS = {}
