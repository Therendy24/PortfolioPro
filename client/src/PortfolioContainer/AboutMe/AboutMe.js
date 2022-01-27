import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css'

export default function AboutMe(props){
// ------------------------------------------------------------
    //the Animation that imported 
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)

    };
// ------------------------------------------------------------


// ------------------------------------------------------------
    //The scrollService that imported // fades in the screen 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

// --------------------------------------------------------------------------
const SCREEN_CONSTRANTS = {
    description: "Aspiring Front-End developer with background knowledge of redux, along with knowing how to building applications with utmost efficiency. A college graduate with a BSC willing to be an asset for an organization. ",
    highlights: {
        bullets: [
              "Front-End web Development",
              "HTML, CSS , and JavaScript",
              "Bootstrap Framework",
              "React and React Native",
              "Redux for State Management",
            
        ],
        heading: "Here are a Few Highlights: "
    }
}

// Have it displayed on the screen by creating another array using map array method 
   
const renderHighlight = () =>{
    return(
        SCREEN_CONSTRANTS.highlights.bullets.map((value ,i) =>(
            <div className = "highlight" key={i}>
                <div className = 'highlight-blob'></div>
                    <span>{value}</span>
            </div>
        ))
    )
}
 
 // --------------------------------------------------------------------------  
    

return(
        <div className="about-me-container screen-container" id = {props.id || ""} >
            <div className = 'about-me-parent'>
            {/* ------------------------------------------------------------- */}
            {/* the screenHeading thats imported */}
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            {/* ------------------------------------------------------------- */}

                 <div className = "about-me-card">
                     <div className = "about-me-profile"></div>
                         <div className = "about-me-details">
                             <span className = "about-me-description">{SCREEN_CONSTRANTS.description}</span>
                            <div className = "about-me-highlights">
                                <div className = "highlight-heading">
                                    <span>{SCREEN_CONSTRANTS.highlights.heading}</span>
                                </div>
                                {renderHighlight()}
                            </div>
                            <div className = "about-me-options">
                                <button className = "btn highlighted-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                    Hire Me 
                                </button>
                                <a href="Therendy_Suffren_Resume.pdf" download = "Therendy_Suffren_Resume.pdf">
                                    <button className="btn highlighted-btn">
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                         
                     </div>
                 </div>
            </div>

        </div>
    )
}