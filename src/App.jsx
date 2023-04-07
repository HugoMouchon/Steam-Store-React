import style from 'App.module.scss';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SideBar from 'components/sideBar/sideBar';
import Header from 'components/header/header';
import { rawgAPI } from 'api/api_ragw';
import CarouselHeader from 'components/carousel/carousel';

const { Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const [contentTransition] = useState(true);

  const [currentGameId, setCurrentGameId] = useState(null);
  const [gamesTopRated, setGamesTopRated] = useState([]);
  const [gameDetails, setGameDetails] = useState([]);
  

  
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

  return (
    <Layout className={style.container}>
      <Header collapsed={collapsed} contentTransition={contentTransition} />
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content
        style={{
          marginLeft: collapsed ? 0 : 110,
          transition: contentTransition ? 'all 0.2s ease-out' : 'none',
        }}
        className={style.container_content}
      >
        <div>
          <div className={style.container_carousel}>
            <h1>Jeux populaires en 2022</h1>
            <CarouselHeader gamesTopRated={gamesTopRated} gameDetails={gameDetails} beforeChange={handleBeforeChange} />
          </div>
        </div>

        <div>
          <div className={style.container_carousel}>
            <h1>Jeux populaires en 2022</h1>
            <CarouselHeader gamesTopRated={gamesTopRated} />
          </div>
        </div>

      </Content>
    </Layout>
  );
};

export default App;