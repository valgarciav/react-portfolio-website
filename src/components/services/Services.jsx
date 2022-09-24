import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2>Work Expereince</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Monitech, Ignition Interlock, Reporting Specialist</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Report compliance and needed records to different states.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Communicate between state, DMV, and client to ensure state
                requirements are met
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Analyzed reports and violations with proper judgement.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Implemented templates for quick and consistent communication
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Created partnerships with state and reps to optimize response
                time
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Monitech*/}

        <article className="service">
          <div className="service__head">
            <h3>Wells Fargo, Teller</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Provided clients with high level service, privacy and
                confidentiality
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Handled account services, monetary transactions and foreign
                exchange
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Verified clients and took necessary measures for risk management
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Worked in a teamwork setting that consisted of daily conflict
                resolution, critical thinking and problem solving
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Developed interpersonal skills and client centricity</p>
            </li>
          </ul>
        </article>
        {/*END OF WELLS FARGO*/}

        <article className="service">
          <div className="service__head">
            <h3>Brown Wynne Funeral Home, Call Center Rep</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Coordinated activities, services, and arrangements to be
                scheduled on time for services.
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Gathered vital information about deceased person to dispatch
                team to needed location.
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Provided welcoming and empathetic communication with family of
                deceased or hospice to coordinate pick up for dispatch team
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
