import "./index.css";

function Guests(props) {
  const { formData, setFormData, setStep } = props;

  const increaseCount = (type) => {
    setFormData({
      ...formData,
      [type]: formData[type] + 1,
    });
  };

  const decreaseCount = (type) => {
    if (type === "adults" && formData.adults > 1) {
      setFormData({
        ...formData,
        adults: formData.adults - 1,
      });
    }

    if (type === "children" && formData.children > 0) {
      setFormData({
        ...formData,
        children: formData.children - 1,
      });
    }

    if (type === "infants" && formData.infants > 0) {
      setFormData({
        ...formData,
        infants: formData.infants - 1,
      });
    }
  };

  return (
    <div className="guests-card">
      <h1 className="heading">Guests</h1>

      <div className="guest-row">
        <div>
          <h3>Adults</h3>
          <p>Age 13 or above</p>
        </div>

        <div className="counter-container">
          <button
            className="count-button"
            onClick={() => decreaseCount("adults")}
          >
            -
          </button>

          <p className="count">{formData.adults}</p>

          <button
            className="count-button"
            onClick={() => increaseCount("adults")}
          >
            +
          </button>
        </div>
      </div>

      <div className="guest-row">
        <div>
          <h3>Children</h3>
          <p>Age 2-12</p>
        </div>

        <div className="counter-container">
          <button
            className="count-button"
            onClick={() => decreaseCount("children")}
          >
            -
          </button>

          <p className="count">{formData.children}</p>

          <button
            className="count-button"
            onClick={() => increaseCount("children")}
          >
            +
          </button>
        </div>
      </div>

      <div className="guest-row">
        <div>
          <h3>Infants</h3>
          <p>Under 2 years</p>
        </div>

        <div className="counter-container">
          <button
            className="count-button"
            onClick={() => decreaseCount("infants")}
          >
            -
          </button>

          <p className="count">{formData.infants}</p>

          <button
            className="count-button"
            onClick={() => increaseCount("infants")}
          >
            +
          </button>
        </div>
      </div>

      <div className="buttons-container">
        <button className="button" onClick={() => setStep(2)}>
          Previous
        </button>

        <button className="button" onClick={() => setStep(4)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Guests;
