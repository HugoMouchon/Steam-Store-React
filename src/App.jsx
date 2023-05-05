import style from 'App.module.scss';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SideBar from 'components/sideBar/sideBar';
import Header from 'components/header/header';
import { rawgAPI } from 'api/api_ragw';
import TopGames from 'components/carousel/topGames';
import PopularsList from 'components/popularsList/popularsList';
import boiteJeux1 from './assets/boite_jeux/returnal-removebg-preview.png';
import boiteJeux2 from './assets/boite_jeux/TLOU2-removebg-preview.png';

const { Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const [contentTransition] = useState(true);

  const [currentGameId, setCurrentGameId] = useState(null);
  const [gamesTopRated, setGamesTopRated] = useState([]);
  const [gameDetails, setGameDetails] = useState([]);

  const [popularsGames, setPopularsGames] = useState([]);

  const handleBeforeChange = (from, to) => {
    const gameId = gamesTopRated[to].id;
    setCurrentGameId(gameId);
  };

  async function fetchTopRatedGames() {
    const games = await rawgAPI.fetchTopRatedGames();
    setGamesTopRated(games);
    console.log(games);
  }

  useEffect(() => {
    fetchTopRatedGames();
  }, []);

  async function fetchGameDetails(gameId) {
    const details = await rawgAPI.fetchGameDetails(gameId);
    setGameDetails(details.description_raw);

  }

  useEffect(() => {
    if (currentGameId) {
      fetchGameDetails(currentGameId);
    }
  }, [currentGameId]);

  async function fetchPopularsGames() {
    const popularsGames = await rawgAPI.fetchPopularsGames();
    setPopularsGames(popularsGames);
    console.log(popularsGames);
  }

  useEffect(() => {
    fetchPopularsGames();
  }, []);


  return (
    <Layout className={style.container}>

      <Header collapsed={collapsed} contentTransition={contentTransition} />
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Content
        style={{
          marginLeft: collapsed ? 0 : 110,
          transition: contentTransition ? 'all 0.2s ease-out' : 'none',
        }}
        className={style.container__content}
      >
        <div className={style.container__carousel}>
          <h1>Meilleur jeux de 2022</h1>
          <TopGames gamesTopRated={gamesTopRated} gameDetails={gameDetails} beforeChange={handleBeforeChange} />
        </div>

        <div className={style.container__popularGames}>
          <h1>Jeux populaires</h1>
          <PopularsList popularsGames={popularsGames} />
        </div>

        <div className={style.container__novelty}>
          <div className={style.filtreBg}>
            <div className={style.description}>
              <h3>Connaissez-vous l'un de ces jeux ?</h3>
              <span>
                "The Last of Us 2" est un jeu d'action-aventure développé par Naughty Dog et publié par Sony Interactive Entertainment en juin 2020. Il est la suite du jeu "The Last of Us" sorti en 2013. L'histoire se déroule cinq ans après les événements du premier jeu et suit Ellie, une jeune femme immunisée contre une pandémie qui a ravagé la civilisation. Après une tragédie personnelle, Ellie part en mission de vengeance contre un groupe militaire brutal et impitoyable. Le joueur contrôle Ellie dans sa quête à travers des zones de quarantaine abandonnées et des villes dévastées, en affrontant des ennemis infectés par un champignon mortel ainsi que des survivants humains hostiles.
              </span>
            </div>

            <div className={style.pictures}>
              <img src={boiteJeux1} alt="boite du jeux vidéo nommé returnal en anglais pour la plateforme playstation 5" className={style.image} />
              <img src={boiteJeux2} alt="boite du jeux vidéo nommé the last of us partie 2 en anglais pour la plateforme playstation 4" className={style.image} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        
      </Content>
    </Layout>
  );
};

export default App;