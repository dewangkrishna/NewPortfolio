import React, { useState, useEffect } from 'react';

const EducationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "High School (2019)",
    "Higher Secondary (2021)",
    "Bachelor's Degree in BCA (2024)"
  ];
//dw
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length); // Loop through steps
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center mt-10 space-y-6 bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-8">My Education</h2>
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Circle for each step with scaling animation */}
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold transform ${
                currentStep === index ? 'bg-green-500 scale-110' : 'bg-green-200 scale-100'
              } transition-all duration-700 ease-in-out`}
            >
              {index + 1}
            </div>

            {/* Longer line between steps with color change animation */}
            {index < steps.length - 1 && (
              <div
                className={`w-48 h-1 ${
                  currentStep >= index + 1 ? 'bg-green-500' : 'bg-green-200'
                } transition-all duration-700 ease-in-out`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center text-lg font-medium text-white mt-4">
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default EducationTimeline;
