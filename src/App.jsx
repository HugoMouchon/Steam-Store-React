import style from 'App.module.scss';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SideBar from 'components/sideBar/sideBar';
import Header from 'components/header/header';
import { rawgAPI } from 'api/api_ragw';
import TopGames from 'components/carousel/topGames';
import PopularsList from 'components/popularsList/popularsList';

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
          <PopularsList popularsGames={popularsGames}/>
        </div>
        
      </Content>
    </Layout>
  );
};

export default App;