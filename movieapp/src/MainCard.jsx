import React from "react";
import Card from "./Card";
import SData from "./CardData";
const favList = "Netflix";
const  FavMthod = () => {
    
  if (favList === "Netflix") {
 return (

SData.map((sval, index) => {
       return (
         <Card
           key={index}
           imgsrc={sval.imgsrc}
           name={sval.mname}
           links={sval.links}
           time={sval.time}
           release={sval.release}
           rating={sval.rating}
         />
       );      
      })
 );      
      
  }
  else {
     return(
            <Card
     imgsrc={SData[3].imgsrc}
     name={SData[3].mname}
     links={SData[3].links}
     time={SData[3].time}
     release={SData[3].release}
     rating={SData[3].rating}
   />
     )
  }
};

const MainCard = () => {
  return (
    <React.Fragment>
      {/* {SData.map((sval, index) => {
       return (
         <Card
           key={index}
           imgsrc={sval.imgsrc}
           name={sval.mname}
           links={sval.links}
           time={sval.time}
           release={sval.release}
           rating={sval.rating}
         />
       );      
      })} */}
      <FavMthod />
    </React.Fragment>
  );
}
export default MainCard;
