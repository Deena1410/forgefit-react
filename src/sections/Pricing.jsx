import React, { useState } from 'react';
import PricingToggle from '../components/PricingToggle';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (value) => {
    setIsYearly(value);
  };

  const plans = [
    {
      id: 1,
      name: 'Basic',
      monthlyPrice: '$69',
      yearlyPrice: '$55',
      features: [
        { included: true, text: '24/7 Gym Access' },
        { included: true, text: 'Basic Equipment Use' },
        { included: true, text: 'Locker Room Access' },
        { included: false, text: 'Group Classes' },
        { included: false, text: 'Personal Training' }
      ],
      popular: false,
      delay: 100
    },
    {
      id: 2,
      name: 'Pro',
      monthlyPrice: '$99',
      yearlyPrice: '$79',
      features: [
        { included: true, text: '24/7 Gym Access' },
        { included: true, text: 'Basic Equipment Use' },
        { included: true, text: 'Locker Room Access' },
        { included: true, text: 'All Group Classes' },
        { included: false, text: 'Personal Training' }
      ],
      popular: true,
      delay: 200
    },
    {
      id: 3,
      name: 'Ultimate',
      monthlyPrice: '$149',
      yearlyPrice: '$119',
      features: [
        { included: true, text: '24/7 Gym Access' },
        { included: true, text: 'Basic Equipment Use' },
        { included: true, text: 'Locker Room Access' },
        { included: true, text: 'All Group Classes' },
        { included: true, text: '4x Personal Training/mo' }
      ],
      popular: false,
      delay: 300
    }
  ];

  return (
    <section id="pricing" className="bg-dark">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our <span className="text-brand">Pricing</span></h2>
          <p>Simple, transparent pricing. Choose the plan that fits your commitment. Save big with our annual option.</p>
        </div>

        <PricingToggle onToggle={handleToggle} />

        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={plan.delay}>
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>
                  <h4 className="price">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}<span>/mo</span>
                  </h4>
                </div>
                <div className="pricing-card-body">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        {feature.included ? (
                          <i className="bi bi-check-lg"></i>
                        ) : (
                          <i className="bi bi-x-lg text-secondary"></i>
                        )}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={plan.popular ? 'btn btn-brand' : 'btn btn-outline-brand'}>
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;