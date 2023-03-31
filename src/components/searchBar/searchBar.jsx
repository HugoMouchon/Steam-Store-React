import style from './style.module.scss';
import { Input } from 'antd';

const { Search } = Input;

export default function SearchBar() {

    const onSearch = (value) => console.log(value);

    return (
        <div>
            <Search
                className={style.searchBar}
                placeholder="Rechercher un jeu"
                onSearch={onSearch}
                enterButton />
        </div>
    )
}
