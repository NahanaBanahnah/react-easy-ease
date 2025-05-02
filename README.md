<!-- ## Installation -->

Full README Coming Soon

# REACT-EASY-EASE

An easy to use package of cubic bezier presets.

# Installation

```bash
npm i @nahana/react-easy-ease

#or

yarn add @nahana/react-easy-ease
```

# Usage

## React With [Motion](https://motion.dev/)

```JavaScript
import { motion } from 'motion/react'

/** IMPORT EASE PRESET  */
import { RP_EaseInOutBack } from 'react-easy-ease'

export const Animate = () => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 10, opacity: 1 }}
			transition={{
				duration: 0.5,
				ease: RP_EaseInOutBack,
			}}
		>
			I ZOOM IN
		</motion.div>
	)
}
```

## CSS

```CSS
/** IMPORT PACKAGE VARS */
@import url('@nahana/react-easy-ease/css');

a {
	color: #fff;
	transition: color 0.5 var(--RP_EaseInOutBack);
}
```

# VALUES

## [Robert Penner Easing Functions](http://robertpenner.com/easing/)

CSS interpretations by [Matthew Lein](https://matthewlein.com/tools/ceaser)

| PRESET              |                   |
| ------------------- | ----------------- |
| `Ease In Quad`      | RP_EaseInQuad     |
| `Ease In Cubic`     | RP_EaseInCubic    |
| `Ease In Quart`     | RP_EaseInQuart    |
| `Ease In Quint`     | RP_EaseInQuint    |
| `Ease In Sine`      | RP_EaseInSine     |
| `Ease In Expo`      | RP_EaseInExpo     |
| `Ease In Circ`      | RP_EaseInCirc     |
| `Ease In Back`      | RP_EaseInBack     |
| `Ease Out Quad`     | RP_EaseOutQuad    |
| `Ease Out Cubic`    | RP_EaseOutCubic   |
| `Ease Out Quart`    | RP_EaseOutQuart   |
| `Ease Out Quint`    | RP_EaseOutQuint   |
| `Ease Out Sine`     | RP_EaseOutSine    |
| `Ease Out Expo`     | RP_EaseOutExpo    |
| `Ease Out Circ`     | RP_EaseOutCirc    |
| `Ease Out Back`     | RP_EaseOutBack    |
| `Ease In Out Quad`  | RP_EaseInOutQuad  |
| `Ease In Out Cubic` | RP_EaseInOutCubic |
| `Ease In Out Quart` | RP_EaseInOutQuart |
| `Ease In Out Quint` | RP_EaseInOutQuint |
| `Ease In Out Sine`  | RP_EaseInOutSine  |
| `Ease In Out Expo`  | RP_EaseInOutExpo  |
| `Ease In Out Circ`  | RP_EaseInOutCirc  |
| `Ease In Out Back`  | RP_EaseInOutBack  |

## [Google Material](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs)

| PRESET                  |                         |
| ----------------------- | ----------------------- |
| `Emphasized Decelerate` | GM_EmphasizedDecelerate |
| `Emphasized Accelerate` | GM_EmphasizedAccelerate |
| `Standard`              | GM_Standard             |
| `StandardDecelerate`    | GM_StandardDecelerate   |
| `StandardAccelerate`    | GM_StandardAccelerate   |
