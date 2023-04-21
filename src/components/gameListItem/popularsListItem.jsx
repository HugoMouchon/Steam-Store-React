import style from "./style.module.scss";
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { RatedStars } from 'components/ratedStars/ratedStars';


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
      <div className={style.stars}>
        {games.rating}
      </div>
    </div>
  )
}