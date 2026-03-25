const ColorSlider = ({ id, label, value }) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" min="0" max="255" value={value} />
    </div>
  );
};

export default ColorSlider;
