export function calculatePosition(
  index: number,
  total: number,
  radiusX = 3,
  radiusY = 2,
) {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  return [
    radiusX * Math.cos(theta) * Math.sin(phi),
    radiusY * Math.sin(theta) * Math.sin(phi),
    radiusX * Math.cos(phi),
  ] as [number, number, number];
}
