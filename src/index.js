
import "./index.css";
import App from "./App";
import Data from "./Data";

var React = require('react');
var ReactDom = require('react-dom');


function ncard(val){
    return (
    <App
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
    )
}
ReactDom.render(
    <>
    <h1 className="heading">Top Netflix Series Of 2021</h1>
    <div className="row">
   
   {Data.map(ncard)}
    </div>
    </>
     ,document.getElementById("root")
     );