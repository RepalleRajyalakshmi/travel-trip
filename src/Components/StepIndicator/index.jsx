import "./index.css";

const stepsList = [
  {
    id: 1,
    displayText: "Your Details",
  },
  {
    id: 2,
    displayText: "Date Selection",
  },
  {
    id: 3,
    displayText: "Guests",
  },
  {
    id: 4,
    displayText: "Travel Assistance",
  },
  {
    id: 5,
    displayText: "Confirmation",
  },
];

function StepIndicator(props) {
  const { step } = props;

  return (
    <div className="steps-container">
      {stepsList.map((eachStep) => {
        const isActive = step === eachStep.id;
        const isCompleted = step > eachStep.id;

        return (
          <div className="step-item" key={eachStep.id}>
            {isCompleted ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                alt={eachStep.displayText}
                className="success-image"
              />
            ) : (
              <div className={isActive ? "active-step" : "inactive-step"}>
                {eachStep.id}
              </div>
            )}

            <p className={isActive ? "active-text" : "inactive-text"}>
              {eachStep.displayText}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;
