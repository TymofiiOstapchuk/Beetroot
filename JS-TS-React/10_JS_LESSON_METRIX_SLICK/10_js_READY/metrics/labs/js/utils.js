export function getCoords(el) {
  const coord = el.getBoundingClientRect();
  const top = Math.round(coord.top + window.pageYOffset);
  const left = Math.round(coord.left + window.pageXOffset);
  const right = Math.round(coord.right + window.pageXOffset);
  return {
    top,
    left,
    right,
    width: coord.width,
    height: coord.height,
  };
}
