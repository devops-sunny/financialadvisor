/* eslint-disable */
import { useEffect, useState } from "react";

const FunFactCounter = () => {
  const [counters, setCounters] = useState({
    specialists: 0,
    experience: 0,
    customers: 0,
  });

  useEffect(() => {
    const targetValues = { specialists: 91, experience: 19, customers: 91000 };
    const duration = 2000; // Animation duration in milliseconds
    const interval = 50; // Interval duration

    const steps = {
      specialists: targetValues.specialists / (duration / interval),
      experience: targetValues.experience / (duration / interval),
      customers: targetValues.customers / (duration / interval),
    };

    const incrementCounter = () => {
      setCounters((prev) => ({
        specialists:
          prev.specialists + steps.specialists >= targetValues.specialists
            ? targetValues.specialists
            : prev.specialists + steps.specialists,
        experience:
          prev.experience + steps.experience >= targetValues.experience
            ? targetValues.experience
            : prev.experience + steps.experience,
        customers:
          prev.customers + steps.customers >= targetValues.customers
            ? targetValues.customers
            : prev.customers + steps.customers,
      }));
    };

    const counterInterval = setInterval(incrementCounter, interval);

    setTimeout(() => {
      clearInterval(counterInterval);
      setCounters(targetValues); // Ensure exact values at the end
    }, duration);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <>
    <div class="ak-height-135 ak-height-lg-80"></div>

    <div className="funfact-counter">
      <div className="container">
        <div className="funfact-inner">
          <div className="funfact-title-content ak-section-heading animation-title-content animation-style3">
            <h3 className="funfact-title ak-section-title">
              Our Extraordinary Achievement
            </h3>
          </div>
          <div className="auto-counter-section">
            <div className="funfact style1">
              <div className="funfact-number color-1">
                <span>{Math.round(counters.specialists)}</span>
                <span>+</span>
              </div>
              <div className="funfact-text">
                <p className="text">Certified Specialist</p>
              </div>
            </div>

            <Divider />

            <div className="funfact style1">
              <div className="funfact-number color-1">
                <span>{Math.round(counters.experience)}</span>
                <span>+</span>
              </div>
              <div className="funfact-text">
                <p className="text">Years of Experience</p>
              </div>
            </div>

            <Divider />

            <div className="funfact style1">
              <div className="funfact-number color-1">
                <span>{Math.round(counters.customers / 1000)}</span>
                <span>k</span>
              </div>
              <div className="funfact-text">
                <p className="text">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

const Divider = () => (
  <div className="divider-border d-none d-xxl-inline">
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="121" viewBox="0 0 38 121" fill="none">
      <path opacity="0.1" d="M0.502868 120.342L37.2834 0.457802" stroke="#030917" />
    </svg>
  </div>
);

export default FunFactCounter;
