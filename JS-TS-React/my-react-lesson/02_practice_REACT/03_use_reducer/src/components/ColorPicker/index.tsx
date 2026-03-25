import '@picker/index.scss'
import ColorSwatch from "@picker/ColorSwatch";
import ColorInputs from "@picker/ColorInputs";
import ColorSliders from "@picker/ColorSliders";

export const toRGB = ({ red, green, blue }) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

const rgb = {
  red: 122,
  green: 122,
  blue: 122,
};

const ColorPicker = () => {
  return (
    <div className="picker-container" style={{ borderColor: toRGB(rgb) }}>
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} />
    </div>
  );
};

export default ColorPicker;
