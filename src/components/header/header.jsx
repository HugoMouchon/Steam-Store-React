import SearchBar from 'components/searchBar/searchBar';
import style from './style.module.scss';

export default function Header({ collapsed, contentTransition }) {
    return (
        <div className={style.container}>
            <div className={style.searchBar}
                            style={{
                                marginLeft: collapsed ? 0 : 100,
                                transition: contentTransition ? 'all 0.2s ease-out' : 'none',
                            }}>
                <SearchBar />
            </div>
            <div className={style.user}>

            </div>
        </div>
    );
}
