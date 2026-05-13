import { useState } from "react";

import "./index.css";

function DateSelection(props) {
  const { formData, setFormData, setStep } = props;

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (formData.startDate === "") {
      newErrors.startDate = "Select start date";
    }

    if (formData.endDate === "") {
      newErrors.endDate = "Select end date";
    }

    if (
      formData.startDate !== "" &&
      formData.endDate !== "" &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "The end date cannot be less than the start date";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(3);
    }
  };

  return (
    <div className="date-card">
      <h1 className="heading">Date Selection</h1>

      <div className="input-container">
        <label className="label">Start Date</label>

        <input
          type="date"
          className="input"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              startDate: e.target.value,
            })
          }
        />

        <p className="error">{errors.startDate}</p>
      </div>

      <div className="input-container">
        <label className="label">End Date</label>

        <input
          type="date"
          className="input"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              endDate: e.target.value,
            })
          }
        />

        <p className="error">{errors.endDate}</p>
      </div>

      <div className="buttons-container">
        <button className="button" onClick={() => setStep(1)}>
          Previous
        </button>

        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DateSelection;
