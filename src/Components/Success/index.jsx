import "./index.css";

function Success(props) {
  const { resetTrip } = props;

  return (
    <div className="success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
        alt="success"
        className="success-image"
      />

      <h1 className="heading">Awesome!</h1>

      <p className="description">Your booking has been confirmed.</p>

      <button className="button" onClick={resetTrip}>
        Book New Trip
      </button>
    </div>
  );
}

export default Success;
