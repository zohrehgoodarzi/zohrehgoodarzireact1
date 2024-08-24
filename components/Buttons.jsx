
import { useState } from "react";
import  "./Buttons.css";


function Buttons() {
  const [buttonHome,setButtonHome]=useState("selectedTabOne");
  const [buttonNews,setNews]=useState("");
  const [buttonContact,setContact]=useState("");
  const [buttonAbout,setAbout]=useState("");
  const [div,setDiv]=useState("selectedTabOne");
  const [newsDiv,setDivnews]=useState("");
  const [contactDiv,setDivContact]=useState("");
  const [aboutDiv,setDivAbout]=useState("");


  const changeColorHome = () => {
    if (buttonHome !== "selectedTabOne"){
       setButtonHome("selectedTabOne");
       setDiv("selectedTabOne");
       setNews("");
       setDivnews("nodisplay");
       setContact("");
       setDivContact("nodisplay");
       setAbout("");
       setDivAbout("nodisplay");
       
    }}


    const changeNewsColor=()=>{
      if(buttonNews!=="selectedTabTwo"){
        setNews("selectedTabTwo");
        setDivnews("display");
        setDiv("nodisplay");
        setButtonHome("");
        setContact("");
        setDivContact("nodisplay");
        setAbout("");
        setDivAbout("nodisplay");
    
        }
    }
 

    const changeContactColor=()=>{
    if(buttonContact!=="selectedTabThree"){
      setContact("selectedTabThree");
      setDivContact("display selectedTabThree");
      setDiv("nodisplay");
      setButtonHome("");
      setNews("");
      setDivnews("nodisplay");
      setAbout("");
      setDivAbout("nodisplay");
      
    }}

    const changeAboutColor=()=>{
    if(buttonAbout!=="selectedTabfour"){
      setAbout("selectedTabfour");
      setDivAbout("display selectedTabfour");
      setButtonHome("");
      setDiv("nodisplay");
      setNews("");
      setDivnews("nodisplay");
      setContact("");
      setDivContact("nodisplay");
      
    }
};


  return (
    <>
    
   <button className={buttonHome} onClick={changeColorHome} >Home</button>
   <button className={buttonNews} onClick={changeNewsColor} >News</button>
   <button  className={buttonContact} onClick={changeContactColor}>Contact</button>
   <button className={buttonAbout} onClick={changeAboutColor}>About</button>
   
    

   
   <div id="container">

   
    <div id="home" className={div}>
      <h1 style={{ paddingLeft:"100px",paddingTop:"50px",marginBottom: "20px"}}>Home</h1>
      <p style={{paddingLeft:"100px"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
       Repellendus nobis nisi ea quaerat aliquam aperiam, <br/>
       fuga nostrum quae minima ex odio animi, error nemo? Obcaecati minima alias aliquid quia assumenda.</p>
    </div>
    <div id="news" className={newsDiv}>
      <h1>News</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
       Voluptatum sint tempora eius sit minus expedita nihil,<br/>
        modi cupiditate omnis repudiandae commodi natus molestias repellat temporibus soluta nam nobis in reprehenderit?</p>
    </div>
    <div id="contact" className={contactDiv}>
      <h1>Contact</h1>
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
      Repellat minima recusandae quo officiis aperiam odio eligendi obcaecati. Recusandae sed, minus ad laudantium, <br/>numquam odit iusto, rem ratione eius delectus modi?</p>
      </div>

    <div id="about" className={aboutDiv}>
    <h1>About</h1>
     <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
     Quibusdam illum, molestiae quas reprehenderit, tempora aspernatur cumque maxime veritatis repudiandae magnam <br/>suscipit eaque iusto necessitatibus? Illo delectus commodi doloribus velit voluptatum.<br/></p>
    </div>
    
    
    </div>
    </>
  
  )
}

export default Buttons