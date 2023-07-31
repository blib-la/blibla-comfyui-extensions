# comfyui-extensions

Extensions for ComfyUI

<!-- toc -->

- [Installation](#installation)
  * [Clone repo (option 1)](#clone-repo-option-1)
  * [Download (option 2)](#download-option-2)
- [Update](#update)
- [Settings](#settings)
  * [Options](#options)
  * [Links Render Mode](#links-render-mode)
  * [Colored nodes](#colored-nodes)
    + [Default](#default)
    + [Positive Negative](#positive-negative)
    + [Dynamic colors](#dynamic-colors)
- [Buttons:](#buttons)
  * [Pin or Unpin all Nodes](#pin-or-unpin-all-nodes)
- [Single extensions](#single-extensions)

<!-- tocstop -->

## Installation

> Options:  
> 1. clone it into the extensions directory  
> 2. download the project  

### Clone repo (option 1)

```shell
cd path/to/ComfyUI/web/extensions
git clone git@github.com:failfa-st/failfast-comfyui-extensions.git
```

### Download (option 2)

1. Download [this zip](https://github.com/failfa-st/failfast-comfyui-extensions/archive/refs/heads/main.zip)
2. unzip the archive
3. Copy to `path/to/ComfyUI/web/extensions`
4. the folder structure should look like this: `path/to/ComfyUI/web/extensions/failfast-comfyui-extensions`

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/6d08fd63-5309-44f8-934a-e120a48c0798)

## Update

```shell
cd path/to/ComfyUI/web/extensions/failfast-comfyui-extensions
git pull
```

## Settings

> Open settings to show options

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/429a51ca-3b4e-49f2-ad59-85e4b1cda403)

### Options

| Name               | default   | description                                                                          |
|--------------------|-----------|--------------------------------------------------------------------------------------|
| Links Render Mode  | `curved`  | Render mode of connector lines (straight, angled, curved, hidden)                    |
| Force Snap to Grid | `false`   | Always snap nodes to grid                                                            |
| Force Box Shape    | `false`   | remove round corners permanently                                                     |
| Render shadows     | `true`    | show/hide shadows                                                                    |
| Connections Width  | `3`       | width of connector lines                                                             |
| Font size          | `10`      | font-size of textareas                                                               |
| Colored Nodes      | `default` | Color nodes in dynamic colors  (default, plain, by type, rainbow, positive negative) |
| Batch resize       | `false`   | When multiple nodes are selected, they will all resize to the same size (sync)       |

### Links Render Mode

Choose between 4 modes

- straight
- angled
- curved
- hidden

![image](https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/af4b05ab-33b8-4cce-be3b-59765b7ea5a6)

### Colored nodes

Automatically adjusts the colors of the nodes.

**positive\negative**: Adjusts the color based on the title


#### Default

A Menu option for node colors has been added. It only works in default mode

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/657d1a6c-d4d9-4091-9a35-16fa9ca50489)
#### Positive Negative

The title is case-insensitive

- negative in title = red
- positive in title = green

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/a1a366ab-7a7f-4d10-b752-7e313f0c7728)

#### Dynamic colors

- plain colors all nodes as grey except for "Note" (yellow)
- by type colors a node by its type
- rainbow colors each node in rainbow colors (top left to bottom right)

**plain** | **by type** | **rainbow**

![nodecolor2](https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/0a0b70f2-5ba7-4cca-b61f-8e776e555635)
## Buttons:

### Pin or Unpin all Nodes

![image](https://github.com/failfa-st/comfyui-extensions/assets/1148334/27c4c79c-2caf-40e9-b9f4-129456b460f0)


## Single extensions

Each extension is compatible to be used separately, so you don't have to load the entire collection

Just copy the file in [`extensions`](/extensions) into the extensions folder of ComfyUI

1. Download the file you need [for example linksRenderMode](https://raw.githubusercontent.com/failfa-st/failfast-comfyui-extensions/main/extensions/linksRenderMode.js)
2. Copy to `path/to/ComfyUI/web/extensions`
3. the folder structure should look like this: `path/to/ComfyUI/web/extensions/linksRenderMode.js`
