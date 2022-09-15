import React from "react";
import "./experience.css";
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have</h5>
      <h2>MY Experience</h2>


      <div className='container experience__container'>
      <div className="experience__fontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article> 
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Beginner</small> 
            </div>
            </article>
          
        </div>
      </div>
      {/*END OF FRONTEND DIV*/}

      <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>Node JS
            </h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
              <div>
            <BsFillPatchCheckFill />
            <h4>Express</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill />
            <div>
            <h4>RESTFUL APIs</h4>
            <small className='text-light'>Beginner</small> 
            </div>
            </article>
            </div>
          
        </div>
      



      </div>
  
    </section>
  );
};

export default Experience;
