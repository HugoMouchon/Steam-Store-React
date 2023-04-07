import style from "./style.module.scss";
import { Carousel } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
                                <span>{game.rating}/5</span>
                            </div>
                            <p className={style.description}>{gameDetails}</p>

                            <Button type="default" icon={<HeartOutlined />} size={"medium"} style={{backgroundColor: "transparent", color: "#fff", marginTop: "15px"}}>
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
