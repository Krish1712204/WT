import Home from "./Home";
import Contact from "./Contact";
import Sample from "./Sample";

function Content({pageName}){
    if(pageName=="Home"){
       return(
          <Home/>
        )
    }
    if(pageName=="Contact"){
       return(
          <Contact/>
        )
    }

    if(pageName=="Sample"){
        return(
            <Sample/>
        )
    }
}

export default Content;