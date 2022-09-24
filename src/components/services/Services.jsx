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
                Maintain communication between state, DMV, and client to ensure
                clients on the program are meeting state requirements.
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Analyzed reports and violations with proper judgement.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
