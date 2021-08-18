import React from "react";
import style from "./card.module.css";

interface playlist {
    images?: string;
    name?: string | string[];
    artists?: string| string[];
    release_date?: string;
    release_date_precision?: string;
}

const Card = ({images,name,artists,release_date,release_date_precision}: playlist) => {
    return (
        <div className={style.card}>
          <div className={style.card_image}>
            <img
              src={images||"https://thumbs.dreamstime.com/b/basic-rgb-174688306.jpg"}
            />
          </div>
          <div className={style.card_text}>
            <h1>{name}</h1>
            <div>
              <p>{artists}</p>
              <p>{release_date}</p>
              <p>{release_date_precision}</p>
            </div>
          </div>
        </div>
      );
  }
  


  export default Card;