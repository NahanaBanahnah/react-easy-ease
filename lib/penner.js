/** Robert Penner's Famous Easing Functions
 * CSS Interpretation By Matthew Lein
 */

module.exports.penner = {
	author: 'Robert Penner',
	secondaryAuthor: 'Matthew Lein',
	prefix: 'RP',
	url: 'http://robertpenner.com/easing/',
	secondaryURL: 'https://matthewlein.com/tools/ceaser',
	presets: [
		{
			name: 'EASE_IN_QUAD',
			curve: [0.55, 0.085, 0.68, 0.53],
		},
		{
			name: 'EASE_IN_CUBIC',
			curve: [0.55, 0.055, 0.675, 0.19],
		},
		{
			name: 'EASE_IN_QUART',
			curve: [0.895, 0.03, 0.685, 0.22],
		},
		{
			name: 'EASE_IN_QUINT',
			curve: [0.755, 0.05, 0.855, 0.06],
		},
		{
			name: 'EASE_IN_SINE',
			curve: [0.47, 0.0, 0.745, 0.715],
		},
		{
			name: 'EASE_IN_EXPO',
			curve: [0.95, 0.05, 0.795, 0.035],
		},
		{
			name: 'EASE_IN_CIRC',
			curve: [0.6, 0.04, 0.98, 0.335],
		},
		{
			name: 'EASE_IN_BACK',
			curve: [0.6, -0.28, 0.735, 0.045],
		},

		{
			name: 'EASE_OUT_QUAD',
			curve: [0.25, 0.46, 0.45, 0.94],
		},
		{
			name: 'EASE_OUT_CUBIC',
			curve: [0.215, 0.61, 0.355, 1.0],
		},
		{
			name: 'EASE_OUT_QUART',
			curve: [0.165, 0.84, 0.44, 1.0],
		},
		{
			name: 'EASE_OUT_QUINT',
			curve: [0.23, 1.0, 0.32, 1.0],
		},
		{
			name: 'EASE_OUT_SINE',
			curve: [0.39, 0.575, 0.565, 1.0],
		},
		{
			name: 'EASE_OUT_EXPO',
			curve: [0.19, 1.0, 0.22, 1.0],
		},
		{
			name: 'EASE_OUT_CIRC',
			curve: [0.075, 0.82, 0.165, 1.0],
		},
		{
			name: 'EASE_OUT_BACK',
			curve: [0.175, 0.885, 0.32, 1.275],
		},

		{
			name: 'EASE_IN_OUT_QUAD',
			curve: [0.455, 0.03, 0.515, 0.955],
		},
		{
			name: 'EASE_IN_OUT_CUBIC',
			curve: [0.645, 0.045, 0.355, 1.0],
		},
		{
			name: 'EASE_IN_OUT_QUART',
			curve: [0.77, 0.0, 0.175, 1.0],
		},
		{
			name: 'EASE_IN_OUT_QUINT',
			curve: [0.86, 0.0, 0.07, 1.0],
		},
		{
			name: 'EASE_IN_OUT_SINE',
			curve: [0.445, 0.05, 0.55, 0.95],
		},
		{
			name: 'EASE_IN_OUT_EXPO',
			curve: [1.0, 0.0, 0.0, 1.0],
		},
		{
			name: 'EASE_IN_OUT_CIRC',
			curve: [0.785, 0.135, 0.15, 0.86],
		},
		{
			name: 'EASE_IN_OUT_BACK',
			curve: [0.68, -0.55, 0.265, 1.55],
		},
	],
}
