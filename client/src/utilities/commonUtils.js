import Home from '../PortfolioContainer/Home/Home';
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Resume from '../PortfolioContainer/Resume/Resume';
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe';
import MyProjects from '../PortfolioContainer/MyProjects/MyProjects';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "MyProjects",
        component: MyProjects,
    },

    {
        screen_name: "ContactMe",
        component: ContactMe,

    },
]
//to get the available screens

export const GET_SCREEN_INDEX = (screen_name) =>{
    //check if the screen name doesnt exist
    if(!screen_name) return -1
    //get the available screens
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
   
};