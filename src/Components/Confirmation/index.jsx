import "./index.css";

function Confirmation(props) {
  const { formData, setStep, resetTrip } = props;

  return (
    <div className="confirmation-card">
      <h1 className="heading">Confirmation</h1>

      <div className="details-container">
        <p>
          <span className="label">Name:</span>

          {formData.name}
        </p>

        <p>
          <span className="label">Start Location:</span>

          {formData.startLocation}
        </p>

        <p>
          <span className="label">End Location:</span>

          {formData.endLocation}
        </p>

        <p>
          <span className="label">Start Date:</span>

          {formData.startDate}
        </p>

        <p>
          <span className="label">End Date:</span>

          {formData.endDate}
        </p>

        <p>
          <span className="label">Adults:</span>

          {formData.adults}
        </p>

        <p>
          <span className="label">Children:</span>

          {formData.children}
        </p>

        <p>
          <span className="label">Infants:</span>

          {formData.infants}
        </p>

        <p>
          <span className="label">Assistance:</span>

          {formData.assistanceNeeded ? formData.assistanceType : "Not Needed"}
        </p>
      </div>

      <div className="buttons-container">
        <button className="button" onClick={resetTrip}>
          Cancel
        </button>

        <button className="button" onClick={() => setStep(6)}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
