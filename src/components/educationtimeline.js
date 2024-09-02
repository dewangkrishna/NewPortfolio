import React, { useState, useEffect } from 'react';

const EducationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "High School (2019)",
    "Higher Secondary (2021)",
    "Bachelor's Degree in BCA (2024)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length); // Loop through steps
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center mt-10 space-y-6 bg-black p-6 rounded-lg shadow-lg max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8">My Education</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Circle for each step with scaling animation */}
            <div
              className={`h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full flex items-center justify-center text-white font-bold transform ${
                currentStep === index ? 'bg-green-500 scale-110' : 'bg-green-200 scale-100'
              } transition-all duration-700 ease-in-out`}
            >
              {index + 1}
            </div>

            {/* Longer line between steps with color change animation */}
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-1 md:w-36 lg:w-48 ${
                  currentStep >= index + 1 ? 'bg-green-500' : 'bg-green-200'
                } transition-all duration-700 ease-in-out`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center text-base md:text-lg lg:text-xl font-medium text-white mt-4">
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default EducationTimeline;
