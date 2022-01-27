import React from 'react';
import img1 from '../../assets/ProjectsCard/html.jpg'; 
import img2 from '../../assets/ProjectsCard/bootstrap.jpg'; 
import img3 from '../../assets/ProjectsCard/react.jpg'; 
import img4 from '../../assets/ProjectsCard/shopping.jpg'
import img5 from '../../assets/ProjectsCard/bootstrap1.jpg'
import img6 from '../../assets/ProjectsCard/reactNative.jpg'
import './MyProjects.css';


import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";



export default function  MyProjects (props) {


// ------------------------------------------------------------
    //the Animation that imported 
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)

    }
// ------------------------------------------------------------


// ------------------------------------------------------------
    //The scrollService that imported // fades in the screen 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

// --------------------------------------------------------------------------

return(
    <div className = 'main-container' id={props.id || ''}>
    {/* ------------------------------------------------------------- */}
        <ScreenHeading
         title = {'My Projects'}
         subHeading= {'What I have been working on'}
         />
    {/* ------------------------------------------------------------- */}

    <div className = "container-fluid-one d-flex justify-content-center">
        <div className="row">
            <div className = " col-lg-4 ">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img1} alt="image 1" className="card-img-top"/>
                        </div>
                        <div className = "card-body">
                            <h4 className="card-title">First HTML Profile Page</h4>
                            <p className="card-text">
                                In my HTML/CSS/JS web fundamentals course, I created a profile static website using my knowledge of HTML.
                                What I was very amazed about was the fact that I implemented an audio player. This website has unlocked the door to the web developer world.
                            </p>
                          
                        </div>
                        <div className='check-out-button'>
                            <a href="https://fundamentals.hostman.site/" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
   
            <div className = " col-lg-4">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img2} alt="image 1" className="card-img-top"/>
                        </div>
                        <div className = "card-body">
                            <h4 className="card-title">Nucamp Bootstrap Project</h4>
                            <p className="card-text">
                            In my Bootstrap Course, I created a bootstrap website that can be developed once for all screen sizes using the Bootstrap library. I Learned about grids and responsive design, Bootstrap CSS and JavaScript components.
                            </p>
                            
                        </div>
                        <div className='check-out-button'>
                            <a href="https://bootstrap-nucamp-project.hostman.site/" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
   
            <div className = "col-lg-4 ">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img3} alt="image 1" className="card-img-top"/>
                        </div>
                        <div className = "card-body">
                            <h4 className="card-title">Nucamp React Project</h4>
                            <p className="card-text">
                            In my react course, I learned the #1 Javascript library for building websites: React. I was will also introduced to advanced aspects of JavaScript ES6, React Components ,developed React-Redux based applications and using json server.
                            </p>
                            
                        </div>
                        <div className='check-out-button'>
                            <a href="https://reactnucampproject.hostman.site/homegit" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
         </div>
         
    </div>
       <div className = "container-fluid d-flex justify-content-center">
        <div className="row">
            <div className = "col-lg-4 ">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img4} alt="image 4" className="card-img-top"/>
                        </div>
                        <div className = "card-body text-dark">
                            <h4 className="card-title">Piano Shopping React Website</h4>
                            <p className="card-text">
                                I developed a personal react website, for users to purchase the best keyboard stations in the year of 2021. I chose
                                to display keyboard stations because I am a piano player that knows the best workstations out there. 
                            </p>
                          
                        </div>
                        <div className='check-out-button'>
                            <a href="https://myreactapp-8f1d9.firebaseapp.com/" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
   
            <div className = "col-lg-4 ">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img5} alt="image 5" className="card-img-top"/>
                        </div>
                        <div className = "card-body text-dark">
                            <h4 className="card-title">Personal Bootstrap Website</h4>
                            <p className="card-text">
                                I attempted to create a static bootstrap website. It is kind of like my own template of how I want my website in the future to be. In the future, I want to 
                                have a virtual piano lesson website where students can learn how to play the piano online. 
                            </p>
                            
                        </div>
                        <div className='check-out-button'>
                            <a href="https://bootstrappiano.hostman.site/index.html" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
   
            <div className = "col-lg-4 ">
                    <div className = "card text-center shadow">
                        <div className = "overflow">
                        <img src = {img6} alt="image 6" className="card-img-top"/>
                        </div>
                        <div className = "card-body text-dark">
                            <h4 className="card-title">Nucamp React-Native Project</h4>
                            <p className="card-text">
                             Learned to update and package the responsive website built using Bootstrap and React and publish it as a mobile application. Using React Native and the Expo SDK to access all native hardware capabilities of modern phones and tablets.In order to execture the project, I use an android emulator. 
                            </p>
                            
                        </div>
                        <div className='check-out-button'>
                            <a href="https://github.com/Therendy24/reactNative" >
                                        <button className="btn highlighted-btn">
                                        Check it out
                                        </button>
                            </a>

                        </div>
                    </div>
            </div>
         </div>
         
    </div>
        
    </div>

);







}

