import { HeartOutlined } from '@ant-design/icons';
import style from './style.module.scss';

export default function FavoriteButton() {
  return (
    <>
      <button className={style.btn}>
        <HeartOutlined
          style={{ color: "#fff"}}
          className={style.icone}
        />
      </button>
    </>
  )
}
