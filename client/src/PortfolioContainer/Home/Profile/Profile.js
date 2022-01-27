import React, { Profiler } from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() { 
return(
    <div className ="profile-container">
        <div className ="profile-parent">
           <div className = "profile-details">
             <div className = "colz">
                 <div className ="colz-icon">
                <a href = "https://www.facebook.com/therendy.suffren">
                    <i className = 'fa fa-facebook-square'></i>
                </a>
                <a href = "https://www.linkedin.com/in/therendy-suffren-03b062174/">
                    <i className = "fa fa-linkedin"> </i>
                </a>
                <a href = "#">
                    <i className = 'fa fa-instagram'></i>
                </a>
        
                <a href = "#">
                    <i className = 'fa fa-twitter-square'></i>
                </a>
             </div>
              </div>

             <div className="profile-details-name">
                <span className="primary-text">
                 {" "}
                 Hello, Im <span className="highlighted-text">Therendy</span>
                </span>
             </div>
             <div className = "profile-details-role">
                 <span className = "primary-text">
                  {" "}
                      <h1>
                       {" "}
                       <Typical loop={Infinity}
                       steps ={[
                           "Enthusiastic Dev 🤓 ",
                            1000,
                            "Front-End Developer 💻",
                            1000,
                            "React/React Native Dev 📱",
                            1000
                       ]} />
                      </h1>
                      <span className = "profile-role-tagline">
                           Knack of building applications with front and back end operations.
                      </span>
               </span>
                </div>
                <div className= "profile-options">
                    <button className = "btn highlighted-btn "
                    // from the coldhelper file in materials folder
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        
                        Hire Me 
                    </button>
                    <a href="Therendy_Suffren_Resume.pdf" download = "Therendy_Suffren_Resume.pdf">
                        <button className="btn highlighted-btn">
                            Get Resume
                        </button>
                    </a>
                </div> 
          </div>
           <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
         </div>
        </div>
    </div>

);
}