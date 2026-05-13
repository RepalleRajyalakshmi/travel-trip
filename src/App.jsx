import { useState } from "react";

import "./App.css";

import StepIndicator from "./components/StepIndicator";
import YourDetails from "./components/YourDetails";
import DateSelection from "./components/DateSelection";
import Guests from "./components/Guests";
import TravelAssistance from "./components/TravelAssistance";
import Confirmation from "./components/Confirmation";
import Success from "./components/Success";

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
