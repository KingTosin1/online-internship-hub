import Footer from '@/components/Footer';
import React from 'react';
import Header from '@/components/Header';


function Landpage() {
  return (
    <div>
        <Header/>
      <div className="main-container">
        <div className="rectangle">
          <div className="linkedin-sales-solutions">
            <div className="rectangle-1">
              <div className="rectangle-2">
                <div className="thumbs-up"></div>
                <span className="top-notch-free-beats">Top Notch Free Beats</span>
              </div>
              <span className="innovative-solutions">
                Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.
              </span>
            </div>
          </div>
        </div>
        
        <div className="asset"></div>
        
        <span className="dont-have-account">Don’t have an account?</span>
        <span className="sign-up">Sign up!</span>
        <span className="welcome-back">Welcome Back</span>
        <span className="login-account">Login into your account</span>
        
        <div className="rectangle-3">
          <button className="google">Google</button>
        </div>
        <div className="rectangle-5">
          <button className="facebook">Facebook</button>
        </div>
        
        <span className="continue-with">Or continue with</span>
        
        <div className="rectangle-8">
          <input className="group-input" type="text" name="username" placeholder="Username" />
        </div>
        <div className="rectangle-9">
          <input className="group-input-a" type="password" name="password" placeholder="Password" />
        </div>
        
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" className="remember-me">Remember me</label>
        </div>
        
        <span className="recover-password">Recover Password</span>
        <button type="button" className="login">Log in</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Landpage;
