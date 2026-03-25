import './index.css'

function Box({ className = '', style = {}, ...props }) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ fontStyle: "italic", ...style }}
      {...props}
    >
      Box
    </div>
  );
}

const Shapes = () => {
  return (
    <div className="shapes">
      <Box className="box__circle" style={{ border: "4px solid red" }} />
      <Box className="box__shape" style={{ border: "4px solid green" }} />
      <Box className="box__lemon" style={{ border: "4px solid tomato" }} />
    </div>
  );
};

export default Shapes;
