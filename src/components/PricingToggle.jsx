import React, { useState } from 'react';

const PricingToggle = ({ onToggle }) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onToggle(newValue);
  };

  return (
    <div className="pricing-toggle" data-aos="fade-up">
      <span className={`toggle-label ${!isYearly ? 'active' : ''}`} id="monthly-label">Monthly</span>
      <div className="form-check form-switch">
        <input 
          className="form-check-input" 
          type="checkbox" 
          role="switch" 
          id="pricing-toggle-switch" 
          checked={isYearly}
          onChange={handleToggle}
        />
      </div>
      <span className={`toggle-label ${isYearly ? 'active' : ''}`} id="yearly-label">Yearly (Save 20%)</span>
    </div>
  );
};

export default PricingToggle;