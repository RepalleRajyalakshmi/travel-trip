import "./index.css";

function TravelAssistance(props) {
  const { formData, setFormData, setStep } = props;

  return (
    <div className="assistance-card">
      <h1 className="heading">Travel Assistance</h1>

      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={formData.assistanceNeeded}
          onChange={(e) =>
            setFormData({
              ...formData,
              assistanceNeeded: e.target.checked,
            })
          }
        />

        <label>Travel Assistance Needed</label>
      </div>

      {formData.assistanceNeeded && (
        <div className="select-container">
          <label>Select Assistance</label>

          <select
            value={formData.assistanceType}
            onChange={(e) =>
              setFormData({
                ...formData,
                assistanceType: e.target.value,
              })
            }
          >
            <option value="">Select</option>

            <option value="Wheelchair">Wheelchair</option>

            <option value="Medical">Medical</option>

            <option value="Food">Food</option>
          </select>
        </div>
      )}

      <div className="buttons-container">
        <button className="button" onClick={() => setStep(3)}>
          Previous
        </button>

        <button className="button" onClick={() => setStep(5)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TravelAssistance;
