import { useState } from "react";

import "./index.css";

function YourDetails(props) {
  const { formData, setFormData, setStep } = props;

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Enter your name";
    }

    if (formData.startLocation === "") {
      newErrors.startLocation = "Enter your start location";
    }

    if (formData.endLocation === "") {
      newErrors.endLocation = "Enter your end location";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  return (
    <div className="details-card">
      <h1 className="heading">Your Details</h1>

      <div className="input-container">
        <label className="label">Name</label>

        <input
          type="text"
          className="input"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <p className="error">{errors.name}</p>
      </div>

      <div className="input-container">
        <label className="label">Start Location</label>

        <input
          type="text"
          className="input"
          value={formData.startLocation}
          onChange={(e) =>
            setFormData({
              ...formData,
              startLocation: e.target.value,
            })
          }
        />

        <p className="error">{errors.startLocation}</p>
      </div>

      <div className="input-container">
        <label className="label">End Location</label>

        <input
          type="text"
          className="input"
          value={formData.endLocation}
          onChange={(e) =>
            setFormData({
              ...formData,
              endLocation: e.target.value,
            })
          }
        />

        <p className="error">{errors.endLocation}</p>
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default YourDetails;
