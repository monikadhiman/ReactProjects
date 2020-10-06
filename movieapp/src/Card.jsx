import React from 'react';
import './Card.css';
import Images from './Img';

 //console.warn(SData);

function Card(props){
    console.warn(props);
    return (
      <React.Fragment>
        <div className="maindiv">
          <div className="carddiv">
            <div className="imgdiv">
                <Images imgsrc={props.imgsrc}/>
            </div>
            <div className="heading">
              <h3>{props.name}</h3>
              <span className="fstyle">{props.rating} Rating</span>
              <span className="fstyle">{props.time}</span>
              <span className="fstyle">{props.release}</span>
              <a href={props.links}>
                <button className="btn" type="button">
                  Show Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}
export default Card;