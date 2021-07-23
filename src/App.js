import React from "react";


function App(props){
    return(
    
    <div className="card">
      <div className="card-image">
        <img src={props.imgsrc} alt="image" />
      </div>
      <div className="content">
        <h3 className="card-category">{props.title}</h3>
        <h4 className="card-title">{props.sname}</h4>
        <a href={props.link} target="_blank"><button className="btn">Watch Now</button></a>
      </div>
    </div>
 
  )
}
export default App;