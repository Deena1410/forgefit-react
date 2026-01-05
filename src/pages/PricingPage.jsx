import React, { useState } from 'react';
import PricingToggle from '../components/PricingToggle';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (value) => {
    setIsYearly(value);
  };

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '$69',
      yearlyPrice: '$55',
      description: 'Perfect for beginners',
      features: [
        '24/7 Gym Access',
        'Basic Equipment Use',
        'Locker Room Access',
        'Free WiFi',
        'Basic Fitness Assessment'
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: '$99',
      yearlyPrice: '$79',
      description: 'Most Popular Choice',
      popular: true,
      features: [
        'Everything in Basic',
        'All Group Classes',
        'Access to All Equipment',
        'Monthly Progress Check',
        'Nutrition Guide',
        'Guest Pass (2/month)'
      ]
    },
    {
      name: 'Ultimate',
      monthlyPrice: '$149',
      yearlyPrice: '$119',
      description: 'Complete Transformation',
      features: [
        'Everything in Pro',
        '4x Personal Training Sessions/mo',
        'Customized Meal Plan',
        'Priority Class Booking',
        'Guest Pass (4/month)',
        'Recovery Sessions',
        'Annual Body Composition Analysis'
      ]
    }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-3">Membership <span className="text-brand">Plans</span></h1>
          <p className="lead text-center mb-5">
            Choose the perfect plan for your fitness journey. All plans include access to our world-class facilities.
          </p>

          <div className="text-center mb-5">
            <PricingToggle onToggle={handleToggle} />
          </div>

          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`pricing-card h-100 ${plan.popular ? 'popular' : ''}`}>
                  <div className="pricing-card-header">
                    <h3>{plan.name}</h3>
                    <h4 className="price">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}<span>/mo</span>
                    </h4>
                    <p className="text-muted">{plan.description}</p>
                  </div>
                  <div className="pricing-card-body">
                    <ul className="list-unstyled">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-lg text-brand me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`btn w-100 ${plan.popular ? 'btn-brand' : 'btn-outline-brand'}`}>
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: 'Can I freeze my membership?',
                  a: 'Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.'
                },
                {
                  q: 'Do you offer student discounts?',
                  a: 'Yes, we offer a 15% discount for students with valid ID.'
                },
                {
                  q: 'Are personal training sessions included?',
                  a: 'Personal training sessions are included in the Ultimate plan. Other plans can add sessions at additional cost.'
                },
                {
                  q: 'Can I bring a guest?',
                  a: 'Pro and Ultimate plans include guest passes. Basic members can purchase day passes for guests.'
                }
              ].map((faq, index) => (
                <div key={index} className="accordion-item bg-dark border-secondary">
                  <h3 className="accordion-header">
                    <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                      {faq.q}
                    </button>
                  </h3>
                  <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;