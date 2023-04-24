import style from './style.module.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function AddButton() {
  return (
    <>
      <button className={style.btn}>
        <ShoppingCartOutlined
          style={{ color: '#fff' }}
          className={style.icone}
        />
      </button>
    </>
  )
}
