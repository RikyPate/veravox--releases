# VeraVox

Bit-perfect audio player for macOS. PCM up to 32-bit/768 kHz, DSD up to DSD512 via DoP, delivered directly to your DAC via CoreAudio IOProc under exclusive hog mode.

## Download

**[Download the latest beta](https://rikypate.github.io/veravox--releases/)**

The beta includes automatic updates via [Sparkle](https://sparkle-project.org/). Once installed, you'll receive new builds without re-downloading.

## Documentation

- [Technical Press Kit](https://rikypate.github.io/veravox--releases/VeraVox_Press_Kit.html): full architecture deep-dive, signal chain, format negotiation, DSD/DoP internals, measurement tools.

## System requirements

- macOS 14 Sonoma or later
- Apple Silicon or Intel
- USB / Thunderbolt DAC recommended for bit-perfect playback

## What's in this repository

This repository hosts the update feed and beta distribution for VeraVox:

| File | Purpose |
|---|---|
| `index.html` | Beta landing page (served via GitHub Pages) |
| `VeraVox_Press_Kit.html` | Technical press kit |
| `appcast-beta.xml` | Sparkle update feed (beta channel) |
| `appcast.xml` | Sparkle update feed (stable channel) |
| `beta/` | Beta DMG builds |
| `release/` | Stable DMG builds |

## License

VeraVox is proprietary software. This repository hosts the update feed and beta distribution only. All rights reserved.
