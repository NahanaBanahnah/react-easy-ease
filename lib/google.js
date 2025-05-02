module.exports.google = {
	author: 'Google Material',
	prefix: 'GM',
	url: 'https://m3.material.io/styles/motion/easing-and-duration/tokens-specs',
	presets: [
		{
			name: 'EMPHASIZED DECELERATE',
			curve: [0.05, 0.7, 0.1, 1.0],
		},
		{
			name: 'EMPHASIZED ACCELERATE',
			curve: [0.3, 0.0, 0.8, 0.15],
		},
		{
			name: 'STANDARD',
			curve: [0.2, 0.0, 0, 1.0],
		},
		{
			name: 'STANDARD DECELERATE',
			curve: [0, 0, 0, 1],
		},
		{
			name: 'STANDARD ACCELERATE',
			curve: [0.3, 0, 1, 1],
		},
	],
}
