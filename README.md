# ComfyUI Extensions by Failfa.st

ComfyUI Extensions by Failfa.st is a robust suite of enhancements, designed to optimize your ComfyUI experience. It
provides a range of features, including customizable render modes, dynamic node coloring, and versatile management
tools. Whether for individual use or team collaboration, our extensions aim to enhance productivity, readability, and
personalization in your ComfyUI environment.

[CHANGELOG](CHANGELOG.md) | [LICENSE (AGPL 3.0)](LICENSE)

<!-- toc -->

- [Installation](#installation)
  * [Clone Repository](#clone-repository)
  * [Download Manually](#download-manually)
- [Update](#update)
- [Settings](#settings)
  * [Options](#options)
  * [Links Render Mode](#links-render-mode)
  * [Colored Nodes](#colored-nodes)
    + [Positive/Negative](#positivenegative)
    + [Dynamic Colors](#dynamic-colors)
- [Context Menu](#context-menu)
  * [Freeze or Unfreeze Group](#freeze-or-unfreeze-group)
  * [Pin or Unpin all Nodes](#pin-or-unpin-all-nodes)
  * [Arranging all Nodes](#arranging-all-nodes)
- [Single Extensions Usage](#single-extensions-usage)
- [Contribution](#contribution)

<!-- tocstop -->

## Installation

Two methods are available for installation:

1. Clone the repository directly into the extensions directory.
2. Download the project manually.

### Clone Repository

```shell
cd path/to/your/ComfyUI/custom_nodes
git clone git@github.com:failfa-st/failfast-comfyui-extensions.git
```

### Download Manually

1. Download the project archive from [here](https://github.com/failfa-st/failfast-comfyui-extensions/archive/refs/heads/main.zip).
2. Extract the downloaded zip file.
3. Move the extracted files to `your-path/ComfyUI/custom_nodes`.
4. Restart ComfyUI

The folder structure should resemble: `your-path/ComfyUI/custom_nodes/failfast-comfyui-extensions`.


## Update

To update the extensions, pull the latest changes from the repository:

```shell
cd path/to/your/ComfyUI/custom_nodes/failfast-comfyui-extensions
git pull
```

## Settings

Explore various customization options available in the settings:

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d919d53f-8160-4556-a63a-66ec25881b2d" alt="Settings options" >
    <p>Settings Options</p>
</div>

### Options

Different customization options available with their default settings and descriptions:

| Name               | Default   | Description                                                                         |
| ------------------ | --------- | ----------------------------------------------------------------------------------- |
| Links Render Mode  | `spline`  | Sets the render mode of connector lines (options: straight, angled, curved, hidden) |
| Force Snap to Grid | `false`   | Forces nodes to snap to the grid                                                    |
| Force Box Shape    | `false`   | Removes round corners from all nodes                                                |
| Render Shadows     | `true`    | Toggles visibility of shadows                                                       |
| Connections Width  | `3`       | Sets the width of connector lines                                                   |
| Font Size          | `10`      | Sets the font size of textareas                                                     |
| Colored Nodes      | `default` | Applies dynamic coloring to nodes                                                   |
| Batch Resize       | `false`   | Resizes multiple selected nodes to the same size synchronously                      |

### Links Render Mode

Choose from four rendering modes for connector lines:

- straight
- linear
- spline (default)
- hidden

<div align="center">
    <img src="https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/af4b05ab-33b8-4cce-be3b-59765b7ea5a6" alt="Links Render Mode" height="300px">
    <p>Links Render Mode Options</p>
</div>

### Colored Nodes

Apply automatic color coding to nodes using various modes.

#### Positive/Negative

Nodes will be colored based on the node title (case-insensitive). This option is compatible with all color modes:

- Titles containing "negative" will color the node red.
- Titles containing "positive" will color the node green.

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/a1a366ab-7a7f-4d10-b752-7e313f0c7728" alt="Positive Negative Node Colors" height="300px">
    <p>Positive and Negative Node Colors</p>
</div>

#### Dynamic Colors

Several dynamic coloring modes are available:

- default: Resets to the original behavior (state of last browser reload).
- plain: Colors all Nodes as grey except for "Note" (yellow).
- by type: Colors a Node by its type.
- rainbow: Colors each Node in rainbow colors (top-left to bottom-right).

<div align="center">
    <img src="https://github.com/ltdrdata/ComfyUI-Manager/assets/1148334/0a0b70f2-5ba7-4cca-b61f-8e776e555635" alt="Dynamic Colors Modes">
    <p>Dynamic Colors Modes: plain, by type, rainbow</p>
</div>

## Context Menu

The context menu offers additional options for nodes, groups, colors, and the canvas:

**Nodes**

- Custom color option (only available in "default" Color Mode).

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/f0c4dc53-0e40-480d-a3f9-09b50a3ab56d" alt="Node options" height="300px">
    <p>Node Options</p>
</div>

**Groups**

- Custom color option.
- Group color option.
- Freeze/unfreeze group.

<div align="center">
    <img src="https://github.com/failfa-st/hyv/assets/1148334/7558fcfb-1733-4d78-904b-50891f29fa68" alt="Group options" height="300px">
    <p>Group Options</p>
</div>

**Canvas**

- Arrange nodes (vertical/horizontal).
- Freeze/unfreeze all nodes.
- Pin/unpin all nodes.

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d45ed248-2a19-4862-bda5-49f9b2703296" alt="Canvas options" height="300px">
    <p>Canvas Options</p>
</div>

### Freeze or Unfreeze Group

Lock or unlock a group and all its child Nodes. Note that new Nodes will not be affected.

### Pin or Unpin all Nodes

Lock or unlock all nodes on the canvas, regardless of their group.

### Arranging all Nodes

You can arrange all Nodes in either vertical or horizontal layout.

|                                          Vertical Layout                                          |                                          Horizontal Layout                                          |
| :-----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| ![vertical](https://github.com/failfa-st/hyv/assets/1148334/c6553232-52f9-4d61-a954-bc0c4645b333) | ![horizontal](https://github.com/failfa-st/hyv/assets/1148334/2b519e3f-554b-48f9-9b81-cd1515ec393b) |

## Single Extensions Usage

Each extension is fully capable of functioning individually. This allows you to incorporate only the extensions you need, rather than the entire suite.

Simply download the desired file from the [`extensions`](extensions) directory and place it in the extensions folder of ComfyUI.

1. Download the required file for example, [linksRenderMode](extensions/linksRenderMode.js).
2. Transfer the file to `path/to/your/ComfyUI/web/extensions`.
3. The folder structure should appear as: `path/to/your/ComfyUI/web/extensions/linksRenderMode.js`.

## Contribution

Want to contribute to ComfyUI Extensions? We encourage community input and improvements! Check out our [CONTRIBUTING](CONTRIBUTING.md) guide for more information.
