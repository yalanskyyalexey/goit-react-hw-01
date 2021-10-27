export function getRandomRgbColor() {
	const r = () => (Math.random() * 256) >> 0;
	const color = `rgb(${r()}, ${r()}, ${r()})`;
	return color;
}
