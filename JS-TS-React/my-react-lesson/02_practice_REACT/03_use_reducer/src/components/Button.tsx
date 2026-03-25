function Button() {
  const value = true;

  return (
    <>
      <div className="btn-group">
        <button onClick={(f) => f} className="btn btn_primary">
          Show
        </button>
        <button onClick={(f) => f} className="btn btn_default">
          Hide
        </button>
      </div>
      <div className="img-box">
        {value && (
          <img
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            className="img-box__item"
          />
        )}
      </div>
    </>
  );
}

export default Button;
