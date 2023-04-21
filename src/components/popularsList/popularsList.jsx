import PopularsListItem from 'components/gameListItem/popularsListItem';
import style from "./style.module.scss";

export default function PopularsList({ popularsGames }) {
    return (
        <>
            <div className={style.liste}>
                {popularsGames.map((game) => {
                    return (
                        <span key={game.id} className={style.liste_item}>
                            <PopularsListItem games={game} />
                        </span>
                    );  
                })}
            </div>
        </>
    );
}
