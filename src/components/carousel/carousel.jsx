import style from "./style.module.scss";
import { Carousel } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { RatedStars } from "components/ratedStars/ratedStars";

export function CarouselHeader({ gamesTopRated, gameDetails, beforeChange }) {
    return (
        <Carousel autoplay beforeChange={beforeChange}>
            {gamesTopRated.map(game => (
                <div className={style.container}>
                    <li key={game.id} className={style.slide}>
                        <div>
                            <img className={style.img} src={game.background_image} alt={game.name} />
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <h2>{game.name}</h2>
                                <RatedStars rating={game.rating} />
                                <span>{game.rating}/5</span>
                            </div>
                            <p className={style.description}>{gameDetails}</p>

                            <Button className={style.favoriteButton} type="default" icon={<HeartOutlined className={style.hearth} />} size={"medium"} style={{ marginTop: "15px" }} >
                                Ajouter Favoris
                            </Button>
                        </div>
                    </li>
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselHeader;
