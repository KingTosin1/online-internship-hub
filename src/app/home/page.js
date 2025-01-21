import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Header />
      
      {/* Find Intern Section */}
      <div className="findintern">
        <h2>Find an Intern</h2>
        <p>Free up yourself from tasks that pull you back</p>
      </div>

      {/* Background Image Section */}
      <div className="backgroundimage"></div>

      {/* Text Section */}
      <div className="text container">
        <p>
          Intern up, produce more! Why spend thousands of dollars only to
          validate an idea? Why hire full-time employees when creating new
          departments in the company when you can get free resources?
        </p>
        <p>
          Partner with us and gain access to a pool of eager interns ready to
          support your Marketing, Administration, and IT needs. With a
          commitment of at least three months, these interns can significantly
          reduce your team's workload—imagine saving over 200 hours of labor
          every month, translating directly into cost savings and increased
          productivity for your business.
        </p>
        <p>
          We handle the nitty-gritty—documentation, contracts, and progress
          tracking—freeing you to focus on what you do best. Provide the
          training and tasks, and watch your operations soar.
        </p>
        <p>
          Ready to enhance your operations with interns? Let's connect and
          transform your business efficiency!
        </p>
      </div>

      
      <button className="learnmore btn btn-primary">Learn More</button>

      
      <div className="howtoapply">
        <p>How To Apply</p>
        <p>Fill the form below</p>
      </div>

      
      <form method="post" className="container">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="education">Education</label>
        <input type="text" id="education" name="education" />

        <label htmlFor="skills">Skills</label>
        <input type="text" id="skills" name="skills" />

        <label htmlFor="experience">Work Experience</label>
        <input type="text" id="experience" name="experience" />

        <label htmlFor="goals">Career Goals</label>
        <input type="text" id="goals" name="goals" />

        <label htmlFor="references">References</label>
        <input type="text" id="references" name="references" />
      </form>

      <Footer />
    </div>
  );
}

export default Home;
