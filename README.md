# lucid-dream [![Build Status](https://travis-ci.org/tonylukasavage/lucid-dream.svg?branch=master)](https://travis-ci.org/tonylukasavage/lucid-dream) [![Coverage Status](https://coveralls.io/repos/github/tonylukasavage/lucid-dream/badge.svg?branch=master)](https://coveralls.io/github/tonylukasavage/lucid-dream?branch=master)

> **DISCLAIMER**: This is purely a proof of concept now. It's not ready to really do much of anything yet until I build out a map editing API.

Celeste map making tools written in node.js

## Prerequisites

* [node.js 10+](https://nodejs.org/en/)
* [Celeste](http://www.celestegame.com/)
* [Everest - Celeste Mod Loader](https://everestapi.github.io/)

## Install

```
npm install --save lucid-dream
```

## Configuration

All you need to do do is tell lucid-dream where to find your Celeste installation via the `celesteDir` property of the `config/lucid-dream.json` file. Here's a few of the default locations:

* **Steam (Window):** `C:\Program Files (x86)\Steam\steamapps\common\Celeste`
* **Steam (Mac):** `~/Library/Application\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS`

## API Docs

Full API documentation can be found at [http://tonylukasavage.github.io/lucid-dream/](http://tonylukasavage.github.io/lucid-dream/)

## Contact

Easiest way to get a hold of me is to drop me a message in the [BloodSweatAndCode's Lab discord](https://discord.gg/77Ndqdn). Check the `#lucid-dev` channel for stuff related to lucid-dream, or feel free to roam around in the other channels dedicated to my other major project, [CV2R - Castlevania 2 Randomizer](https://github.com/BloodSweatAndCode/cv2r).

## Credits

The _real_ map editing kings are [Vexatos](https://github.com/Vexatos) and [Cruor](https://github.com/Cruor). They created:

* [Maple](https://github.com/CelestialCartographers/Maple) - [Julia](https://julialang.org/) API for developing Celeste maps
* [Ahorn](https://github.com/CelestialCartographers/Ahorn) - Visual map maker and level editor for Celeste
* [Loenn](https://github.com/CelestialCartographers/Loenn) (WIP) - The next evolution in visual map making for Celeste (Ahorn's eventual successor)

All these repos can be found at the [Celestial Cartogrpahers github page](https://github.com/CelestialCartographers). Those tools are the ones you really want to be looking at for Celeste map building. Additionally, if you want to learn more about Celeste map building or get in touch with Vexatos or Cruor, you can find them in the [Celeste discord](https://discord.gg/yex8gd3) on the `#map_making` channel.

Big thanks to Vexatos specifically for helping me understand how Maple works and giving me lots of details on the Celeste `bin` file format.
