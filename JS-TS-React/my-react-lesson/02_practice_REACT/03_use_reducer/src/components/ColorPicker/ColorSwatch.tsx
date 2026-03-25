const ColorSwatch = ({ red, green, blue }) => {
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  );
};

export default ColorSwatch;
