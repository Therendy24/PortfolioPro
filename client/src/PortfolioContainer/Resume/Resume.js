import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props){

    /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

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
     //resume component
     const ResumeHeading = (props) => {
        
        return(
            <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>

        )
    }
  
 // -----------------------------------------------------------------------------
   //array of collection of datas , from the Resume Folder in assets folder
   const resumeBullets = [
    {label : "Education", logoSrc: "education.svg"},
    {label: "Work History", logoSrc: "work-history.svg"},
    {label: "Programming Skills" , logoSrc: "programming-skills.svg"},
    {label: "Projects" , logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interest.svg"},
];
const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 30 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];
  const projectsDetails = [
    {
        title: "Profile website ",
        duration: {fromDate: "2021", toDate: "2021"},
        description: " very basic Profile website  ",
        subHeading: "Technologies Used: HTML",
  
      },
    {
        title: "Bootstrap Nucamp Website",
        duration: {fromDate: "2021", toDate: "2021"},
        description: "Nucamp Webiste created during the course. ",
        subHeading: "Technologies Used: Bootstrap, HTML, CSS"
     },
     {
        title: "PianoLessons Website",
        duration: {fromDate: "2021", toDate: "2021"},
        description: "A mock and static interactive piano lessons website TEMPLATE. One day will be useful when I launch a business.",
        subHeading: "Technologies Used: Bootstrap, HTML, CSS"
     },
     
   {
    title: "React Version Nucamp Website",
    duration: {fromDate: "2021", toDate: "2021"},
    description: "Nucamp Webiste created during the course. ",
    subHeading: "Technologies Used: React JS ,Bootstrap, HTML, CSS"
 },
   
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
    <ResumeHeading 
         heading = {"Kean University"}
         subHeading =  {"BACHELORS OF COMPUTER SCIENCE"}
         fromDate={"2016"}
         toDate = {"2021"}
        />
     <ResumeHeading 
         heading = {"Nucamp"}
         subHeading =  {"Web Fundamentals"}
         fromDate={"2021"}
         toDate = {"2021"}
        />

     <ResumeHeading 
         heading = {"Nucamp"}
         subHeading =  {"Full-Stack Web + Mobile"}
         fromDate={"2021"}
         toDate = {"2022"}
        />
      <ResumeHeading 
         heading = {"High School"}
         subHeading =  {"Alexander Hamiltion Prepatory Academy"}
         fromDate={"2012"}
         toDate = {"2016"}
        />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"No work Experience"}
          subHeading={"No valid Working Experience"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            No valid working experience.......
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - No valid working experience.......
          </span>
          <br />
          <span className="resume-description-text">
             - No valid working experience.......
          </span>
          <br />
          <span className="resume-description-text">
          - No valid working experience.......
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music and playing the piano is something i do on a regular basis."
        />
      
    </div>,
  ];

    // -----------------------------------------------------------------------------  
  //carousal function
  const handleCarousal = (index) => {
    let offsetHeight = 360;
    
    let newCarousalOffset ={
        style:{transform: "translateY("+ index * offsetHeight * -1 + "px)"},
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
};
// -----------------------------------------------------------------------------  
    
  //onlclick function for the handleCarousel function , the icon and the label

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        //for the font color when selected , the font color is white 
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
         <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
// ----------------------------------------------------------------------------- 
   //function to get Resume screens 

 const getResumeScreens = () => {
    return(
        <div  style={carousalOffsetStyle.style}
        className = "resume-details-carousal"
        >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}

        </div>
    )
}

       
 // -----------------------------------------------------------------------------   



    







return(
        <div className=" resume-container screen-container  "id={props.id || ""}>
            <div className = "resume-content">
                <ScreenHeading title={"Resume"} subHeading = {"My formail Bio Details"} />
                <div className = "resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>    
                                <div className="bullets">
                                {getBullets()}

                                </div>
                            
                        </div>
                    </div>
                    <div className = "resume-bullet-details">
                    {getResumeScreens()}
                    </div>
                </div>
            </div>

        </div>

    )
}