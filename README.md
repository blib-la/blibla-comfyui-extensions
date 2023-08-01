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
    + [Positive Negative](#positive-negative)
    + [Dynamic colors](#dynamic-colors)
- [Context Menu:](#context-menu)
  * [Freeze or unfreeze Group](#freeze-or-unfreeze-group)
  * [Pin or Unpin all Nodes](#pin-or-unpin-all-nodes)
  * [Arrange all nodes](#arrange-all-nodes)
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

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d919d53f-8160-4556-a63a-66ec25881b2d)
### Options

| Name               | default   | description                                                                          |
|--------------------|-----------|--------------------------------------------------------------------------------------|
| Links Render Mode  | `spline`  | Render mode of connector lines (straight, angled, curved, hidden)                    |
| Force Snap to Grid | `false`   | Always snap nodes to grid                                                            |
| Force Box Shape    | `false`   | remove round corners permanently                                                     |
| Render shadows     | `true`    | show/hide shadows                                                                    |
| Connections Width  | `3`       | width of connector lines                                                             |
| Font size          | `10`      | font-size of textareas                                                               |
| Colored Nodes      | `default` | Color nodes in dynamic colors  (default, plain, by type, rainbow, positive/negative) |
| Batch resize       | `false`   | When multiple nodes are selected, they will all resize to the same size (sync)       |

### Links Render Mode

Choose between 4 modes

- straight
- linear
- spline (default)
- hidden

![image](https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/af4b05ab-33b8-4cce-be3b-59765b7ea5a6)

### Colored nodes

Various color modes have been added to allow automatic coloring of nodes. 

#### Positive Negative

Colors a node depending on the node title (case-insensitive). 

> This option is compatible with all color modes

- "negative" in title = red
- "positive" in title = green

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/a1a366ab-7a7f-4d10-b752-7e313f0c7728)

#### Dynamic colors

- default: Resets to the original behavior (state of last browser reload)
- plain: Colors all Nodes as grey except for "Note" (yellow)
- by type: Colors a Node by its type
- rainbow: Colors each Node in rainbow colors (top-left to bottom-right)

**plain** | **by type** | **rainbow**

![nodecolor2](https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/0a0b70f2-5ba7-4cca-b61f-8e776e555635)

## Context Menu:

**Nodes**

- Colors > Custom (only works in Color Mode: "default")

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/f0c4dc53-0e40-480d-a3f9-09b50a3ab56d)

**Groups**

- Edit group > Color > Custom
- Edit group > Color > Color all (colors Group and child Nodes)
- Edit group > freeze/unfreeze (pins Group and child Nodes)

![image](https://github.com/failfa-st/hyv/assets/1148334/7558fcfb-1733-4d78-904b-50891f29fa68)

**Colors**

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/c43c2c7b-1eb5-4827-ba10-c53cc1b58100)


**Canvas**  

- Arrange (vertical)
- Arrange (horizontal)
- Freeze all
- Unfreeze all
- Pin all Nodes
- Unpin all Nodes

![image](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d45ed248-2a19-4862-bda5-49f9b2703296)

### Freeze or unfreeze Group

Locks or unlocks a group and all child Nodes. New Nodes will not be affected.

### Pin or Unpin all Nodes

Locks or unlocks all nodes on the canvas. New Nodes will not be affected.

### Arrange all nodes

Arranges all Nodes in a vertical or horizontal layout.

**Vertical**

![image](https://github.com/failfa-st/hyv/assets/1148334/c6553232-52f9-4d61-a954-bc0c4645b333)

**Horizontal**  

![image](https://github.com/failfa-st/hyv/assets/1148334/2b519e3f-554b-48f9-9b81-cd1515ec393b)



## Single extensions

Each extension is compatible to be used separately, so you don't have to load the entire collection

Just copy the file in [`extensions`](/extensions) into the extensions folder of ComfyUI

1. Download the file you need [for example linksRenderMode](https://raw.githubusercontent.com/failfa-st/failfast-comfyui-extensions/main/extensions/linksRenderMode.js)
2. Copy to `path/to/ComfyUI/web/extensions`
3. the folder structure should look like this: `path/to/ComfyUI/web/extensions/linksRenderMode.js`
