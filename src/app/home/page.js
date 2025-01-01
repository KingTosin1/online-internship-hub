import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

function Home() {
    return (
        <div>
            <Header></Header>
            <div className='findintern'>
                <h2>Find an intern</h2>
                <p>Free up yourself from tasks that pull you back</p>
            </div>
            <div className='backgroundimage'>

            </div>
            <p className='text'>
                Intern up, produce more!

                Why spend thousands of dollars only to validate an idea? Why hire full-time employees when creating new departments in the company when you can get free resources?



                Partner with us and gain access to a pool of eager interns ready to support your Marketing, Administration, and IT needs. With a commitment of at least three months, these interns can significantly reduce your team's workload—imagine saving over 200 hours of labor every month, translating directly into cost savings and increased productivity for your business.



                We handle the nitty-gritty—documentation, contracts, and progress tracking—freeing you to focus on what you do best. Provide the training and tasks, and watch your operations soar.

                Ready to enhance your operations with interns? Let's connect and transform your business efficiency!


            </p>
            <button className='learnmore'>Learn More</button>
            <div className='howtoapply'>
                <p>How To Apply</p>
                <p>Fill the form below</p>
            </div>
            <form   method='post'><br></br>
                <label for='name'>Full Name</label>
                <input type='name'></input><br></br>
                <label for='text'>Education</label>
                <input type='text'></input><br></br>
                <label for='text'>Skills</label>
                <input type='text'></input><br></br>
                <label for='text'>Work Experience</label>
                <input type='text'></input><br></br>
                <label for='text'>Carrier goals</label>
                <input type='text'></input><br></br>
                <label for='name'>References</label>
                <input type='name'></input>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default Home
