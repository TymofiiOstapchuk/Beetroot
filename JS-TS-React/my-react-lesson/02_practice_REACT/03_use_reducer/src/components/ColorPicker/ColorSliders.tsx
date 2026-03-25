import ColorSlider from "@picker/ColorSlider";

const ColorSliders = ({ red, green, blue }) => {
  return (
    <section className="color-sliders">
      <ColorSlider id="red-slider" label="Red" value={red} />
      <ColorSlider id="green-slider" label="Green" value={green} />
      <ColorSlider id="blue-slider" label="Blue" value={blue} />
    </section>
  );
};

export default ColorSliders;
