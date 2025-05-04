<!-- ## Installation -->

Full README Coming Soon

## REACT-EASY-EASE

### About

`@nahana/react-easy-ease` is an easy to use animation preset library. The package includes numerous easing presets that can be used in React animation libraries such as [Motion](https://motion.dev/) or as CSS **transition** cubic-bezier values.

### Full Documentation & Demos

Visit the [React Easy Ease](https://react-easy-ease-docs.vercel.app) docs for full documentation as well as previews to each preset.

### Installation

```bash
npm i @nahana/react-easy-ease

#or

yarn add @nahana/react-easy-ease

#or

pnpm @nahana/react-easy-ease
```

## Usage

### React With [Motion](https://motion.dev/)

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

### CSS

```CSS
/** IMPORT PACKAGE VARS */
@import url('@nahana/react-easy-ease/css');

a {
	color: #fff;
	transition: color 0.5 var(--RP_EaseInOutBack);
}
```

## VALUES

### [Robert Penner Easing Functions](http://robertpenner.com/easing/)

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

## Andrew Embury

Homepage: [yellowlab.tv](https://www.yellowlab.tv/)

Instagram: [@yellowlabtv](https://www.instagram.com/yellowlabtv/)

| PRESET                  |                        |
| ----------------------- | ---------------------- |
| `Smooth Operator`       | AE_SmoothOperator      |
| `Endless Bummer`        | AE_EndlessBummer       |
| `Get Around`            | AE_GetAround           |
| `Unknown Soldier`       | AE_UnknownSoldier      |
| `Spanish Caravan`       | AE_SpanishCaravan      |
| `Five to One`           | AE_FiveToOne           |
| `Wild in The Streets`   | AE_WildInTheStreets    |
| `Daniel`                | AE_Daniel              |
| `Crocodile Tears`       | AE_CrocodileTears      |
| `Crystal Ship`          | AE_CrystalShip         |
| `10cc`                  | AE_10Cc                |
| `Bishop`                | AE_Bishop              |
| `Scarborough Fair`      | AE_ScarboroughFair     |
| `Tulsa Time`            | AE_TulsaTime           |
| `Norwegian Skog`        | AE_NorwegianSkog       |
| `Weird Fishes`          | AE_WeirdFishes         |
| `Brave Strangers`       | AE_BraveStrangers      |
| `Stranger Than Diction` | AE_StrangerThanDiction |
| `The Gambler`           | AE_TheGambler          |
| `Cracklin Rose`         | AE_CracklinRose        |

## Cedits & Thanks

-   Robert Penner: Creator of the original easing function
    -   [Easing Functions](http://robertpenner.com/easing/)
    -   [Easing Equations](http://robertpenner.com/scripts/easing_equations.txt)
-   Matthew Lein: Creator of CSS interpretations of Penner's functions
    -   [Ceaser Animation Tool](https://matthewlein.com/tools/ceaser)
-   Andrew Embury: Creator of Andrew Embury's extravaganza animation presets
    -   [yellowlab.tv](https://www.yellowlab.tv/)
    -   [@yellowlabtv](https://www.instagram.com/yellowlabtv/)

## License

2025 Nate Mitchell, [MIT](https://github.com/NahanaBanahnah/react-easy-ease/blob/master/LICENSE)
