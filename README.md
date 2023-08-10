# ComfyUI Extensions by Failfa.st

![Screenshot 2023-08-02 004936](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d1530160-3c77-4aac-952f-7b9f2cf37b8f)

[![Discord](https://img.shields.io/discord/1091306623819059300?color=7289da&label=Discord&logo=discord&logoColor=fff&style=for-the-badge)](https://discord.com/invite/m3TBB9XEkb)

ComfyUI Extensions by Failfa.st is a robust suite of enhancements, designed to optimize your ComfyUI experience. It
provides a range of features, including customizable render modes, dynamic node coloring, and versatile management
tools. Whether for individual use or team collaboration, our extensions aim to enhance productivity, readability, and
personalization in your ComfyUI environment.

[CHANGELOG](CHANGELOG.md) | [LICENSE (AGPL 3.0)](LICENSE)

## Request a new feature
### If you have an idea for a new extension, you can open a [Feature Request](https://github.com/failfa-st/failfast-comfyui-extensions/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=)

## Table of Contents

<!-- toc -->

- [Installation](#installation)
  * [Load via ComfyUI manager](#load-via-comfyui-manager)
  * [Clone Repository](#clone-repository)
  * [Download Manually](#download-manually)
- [Update](#update)
- [Settings](#settings)
  * [Options](#options)
  * [Colored Nodes](#colored-nodes)
    + [Positive/Negative](#positivenegative)
    + [Dynamic Colors](#dynamic-colors)
- [Context Menu](#context-menu)
  * [Nodes](#nodes)
    + [Custom Color Option (only available in "default" Color Mode)](#custom-color-option-only-available-in-default-color-mode)
    + [Show Title on Reroute Node](#show-title-on-reroute-node)
    + [Render Reroute as Dot](#render-reroute-as-dot)
    + [Copy Images](#copy-images)
  * [Groups](#groups)
    + [Group Color Option](#group-color-option)
    + [Freeze/Unfreeze Group](#freezeunfreeze-group)
  * [Canvas](#canvas)
    + [Pin or Unpin all Nodes](#pin-or-unpin-all-nodes)
    + [Freeze or unfreeze all Groups and Nodes](#freeze-or-unfreeze-all-groups-and-nodes)
    + [Arranging all Nodes](#arranging-all-nodes)
- [Single Extensions Usage](#single-extensions-usage)
- [Contribution](#contribution)

<!-- tocstop -->

## Installation

Three methods are available for installation:

1. Load via [ComfyUI manager](https://github.com/ltdrdata/ComfyUI-Manager)
2. Clone the repository directly into the extensions directory.
3. Download the project manually.


### Load via ComfyUI manager

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/796aaa99-9b16-4087-bebb-ed8638a8b9fc" alt="ComfyUI manager" >
    <p>Install via ComfyUI manager</p>
</div>

### Clone Repository

```shell
cd path/to/your/ComfyUI/custom_nodes
git clone git@github.com:failfa-st/failfast-comfyui-extensions.git
```

### Download Manually

1. Download the project archive from [here](https://github.com/failfa-st/failfast-comfyui-extensions/archive/refs/heads/main.zip).
2. Extract the downloaded zip file.
3. Move the extracted files to `path/to/your/ComfyUI/custom_nodes`.
4. Restart ComfyUI

The folder structure should resemble: `path/to/your/ComfyUI/custom_nodes/failfast-comfyui-extensions`.


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
| Force Snap to Grid | `false`   | Forces nodes to snap to the grid                                                    |
| Force Box Shape    | `false`   | Removes round corners from all nodes                                                |
| Render Shadows     | `true`    | Toggles visibility of shadows                                                       |
| Connections Width  | `3`       | Sets the width of connector lines                                                   |
| Font Size          | `10`      | Sets the font size of textareas                                                     |
| Colored Nodes      | `default` | Applies dynamic coloring to nodes                                                   |
| Batch Resize       | `false`   | Resizes multiple selected nodes to the same size synchronously                      |

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

### Nodes

#### Custom Color Option (only available in "default" Color Mode)

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/f0c4dc53-0e40-480d-a3f9-09b50a3ab56d" alt="Node color options" height="300px">
    <p>Node Color Options</p>
</div>

#### Show Title on Reroute Node

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/e40ea33d-5a44-4859-b050-ed7a13057536" alt="reroute Node options" width="400px">
    <p>Reroute show/hide Title</p>
</div>

#### Render Reroute as Dot

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/d575b450-da5d-4357-832f-de294a5cc3d9" alt="reroute Node as dot" width="400px" >
    <p>Reroute as dot</p>
</div>


|                                          microdot                                         |                                                    microdot / dot / off                                                     |
| :-----------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------:|
| ![vertical](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/41fab393-5d85-4e2c-8f5d-2e003cd6b2b3) | ![horizontal](https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/403df5b7-7d05-40a7-bd61-1c807e0da433) |







#### Copy Images

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/f41b4aff-9677-4faf-85cb-86ce497d6240" alt="Copy images" >
    <p>Copy Image</p>
</div>

### Groups

#### Group Color Option

You can color a group with a custom color and even color a group including all its child Nodes

<div align="center">
    <img src="https://github.com/failfa-st/failfast-comfyui-extensions/assets/1148334/f3788347-3fe3-4959-b14c-5b9db96e8f41" alt="Group color options" height="300px">
    <p>Group color Options</p>
</div>


#### Freeze/Unfreeze Group

Lock or unlock a group and all its child Nodes. Note that new Nodes will not be affected.

<div align="center">
    <img src="https://github.com/failfa-st/hyv/assets/1148334/7558fcfb-1733-4d78-904b-50891f29fa68" alt="Group freeze" height="300px">
    <p>Group freeze/unfreeze</p>
</div>



### Canvas 

#### Pin or Unpin all Nodes

Lock or unlock all nodes on the canvas, regardless of their group.


#### Freeze or unfreeze all Groups and Nodes

Lock or unlock all groups and all Nodes

#### Arranging all Nodes

You can arrange all Nodes in either vertical or horizontal layout.

|                                          Vertical Layout                                          |                                          Horizontal Layout                                          |
| :-----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| ![vertical](https://github.com/failfa-st/hyv/assets/1148334/c6553232-52f9-4d61-a954-bc0c4645b333) | ![horizontal](https://github.com/failfa-st/hyv/assets/1148334/2b519e3f-554b-48f9-9b81-cd1515ec393b) |

## Single Extensions Usage

Each extension is fully capable of functioning individually. This allows you to incorporate only the extensions you need, rather than the entire suite.

Simply download the desired file from the [`extensions`](extensions) directory and place it in the extensions folder of ComfyUI.

1. Download the required file for example, [reroute](extensions/reroute.js).
2. Transfer the file to `path/to/your/ComfyUI/web/extensions`.
3. The folder structure should appear as: `path/to/your/ComfyUI/web/extensions/reroute.js`.

## Contribution

Want to contribute to ComfyUI Extensions? We encourage community input and improvements! Check out our [CONTRIBUTING](CONTRIBUTING.md) guide for more information.
