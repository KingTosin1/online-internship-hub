import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


function Students() {
  return (
    <div>
      <Header></Header>
      <p className='score'>
      Score 98% or higher to get a chance to be hired after internship!
      Unlocking potential and opening doors to new opportunities
      </p>
      <div className='backgroundimage2'>

      </div>
      <div className='internshipprogram'>
               <p> Internship Programs</p>
            <p> The programs that make us stand out.</p>
            </div>
            
           
           
            <div className='upbox'>
            <div className='marketing'>
            <h3>Marketing Program</h3>
            <div className='box1'>
    
                <p>
                Focus: Digital marketing, market research, content creation.
                Skills: SEO, social media strategies, analytics tools.
                Ideal for: Creative individuals interested in
                marketing strategies and campaigns.
                </p>
            </div>
            </div>


            <div className='administration'>
            <h3>Administration Program</h3>
            <div className='box2'>
                 <p>
                 Focus: Office management, organizational tasks, scheduling.
                 Skills: Time management, proficiency in tools like MS Office, organizational skills.
                 Ideal for: Those interested in administrative roles or office coordination.</p>   
            </div>
            </div>
            </div>
            <div className='downbox'>
                <div className='infotech'>

                <h3>Information and Technology Program</h3>
            <div className='box3'>
                <p>
                Focus: Software development, IT support, system management.
                Skills: Programming, troubleshooting, understanding IT infrastructures.
                Ideal for: Tech enthusiasts wanting hands-on experience in IT.
                </p>
            </div>
            </div>
            <div className='humanresource'>
            <h3>Human resources Program</h3>
            <div className='box4'>
                <p>
                Focus: Recruitment, employee engagement, HR policies.
                Skills: Communication, conflict resolution, HR management software.
                Ideal for: Aspiring HR professionals seeking practical experience.
                </p>
            </div>
            </div>
            </div>
            <Footer></Footer>
    </div>
   

  )
}

export default Students
