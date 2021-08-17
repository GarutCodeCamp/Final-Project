/* eslint-disable react/prop-types */
import React from "react"
import style from "./card.module.css"


const Card = ({playlist}) => {
    return(
        <div className={style.card}>
            <div className={style.card_image}>
                <img src={playlist?.images[0]?.url||"https://thumbs.dreamstime.com/b/basic-rgb-174688306.jpg"} />
            </div>
            <div className={style.card_text}>
                <h1>{playlist.name}</h1>                
                    <p>{playlist.description}</p>
            </div>    
        </div>
    )
}

const Card2 = ({playlist}) => {
    return(
        <div  className={style.card}>
            <div className={style.card_image}>
                <img src={playlist?.images[0]?.url||"https://thumbs.dreamstime.com/b/basic-rgb-174688306.jpg"} />
            </div>
            <div className={style.card_text}>
                <h1>{playlist.name}</h1>
                <div>
                    <p>{playlist.artists[0].name}</p>
                    <p>{playlist.release_date}</p>
                    <p>{playlist.release_date_precision}</p>
                </div>                    
            </div>    
        </div>
    )
}

export { Card, Card2}