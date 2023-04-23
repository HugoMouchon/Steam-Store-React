import style from "./style.module.scss";
import React from 'react';
import { RatedStars } from 'components/ratedStars/ratedStars';
import Editors from "components/editors/editors";


export default function PopularsListItem({ games }) {
  return (
    <div className={style.container}>
      <div className={style.container__image}>
        <img
          className={style.image}
          src={games.background_image}
          alt={games.name}
        />
      </div>
      <div className={style.titre}>
        {games.name}
      </div>
      <div className={style.container__starsAndEditors}>

        <div className={style.stars}>
          <RatedStars rating={games.rating} />
          <span>{games.rating}</span>
        </div>

        <div className={style.editors}>
          <Editors games={games}/>
        </div>
      </div>

    </div>
  )
}