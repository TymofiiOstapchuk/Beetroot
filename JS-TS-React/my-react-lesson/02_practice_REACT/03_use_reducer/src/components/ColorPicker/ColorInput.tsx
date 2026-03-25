const ColorInput = ({ id, label, value }) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" min="0" max="255" value={value} />
    </div>
  );
};

export default ColorInput;
