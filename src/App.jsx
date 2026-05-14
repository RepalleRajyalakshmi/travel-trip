import { useState } from "react";

import "./App.css";

import StepIndicator from "./Components/StepIndicator";
import YourDetails from "./Components/YourDetails";
import DateSelection from "./Components/DateSelection";
import Guests from "./Components/Guests";
import TravelAssistance from "./Components/TravelAssistance";
import Confirmation from "./Components/Confirmation";
import Success from "./Components/Success";
import Places from "./Components/Places";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    startLocation: "",
    endLocation: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    assistanceNeeded: false,
    assistanceType: "",
  });

  const resetTrip = () => {
    setStep(1);

    setFormData({
      name: "",
      startLocation: "",
      endLocation: "",
      startDate: "",
      endDate: "",
      adults: 1,
      children: 0,
      infants: 0,
      assistanceNeeded: false,
      assistanceType: "",
    });
  };

  return (
    <div className="app-container">
      <Places />

      <StepIndicator step={step} />

      {step === 1 && (
        <YourDetails
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <DateSelection
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <Guests
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 4 && (
        <TravelAssistance
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 5 && (
        <Confirmation
          formData={formData}
          setStep={setStep}
          resetTrip={resetTrip}
        />
      )}

      {step === 6 && <Success resetTrip={resetTrip} />}
    </div>
  );
}

export default App;
