import ColorInput from "@picker/ColorInput";

const ColorInputs = ({ red, green, blue }) => {
  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} />
      <ColorInput id="green-input" label="Green" value={green} />
      <ColorInput id="blue-input" label="Blue" value={blue} />
    </section>
  );
};

export default ColorInputs;
