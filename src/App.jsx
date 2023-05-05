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
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque esse, assumenda laudantium fugit nobis nisi repudiandae sit voluptatum corrupti eaque, quasi maxime nostrum nam perspiciatis est. Beatae, similique qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque esse, assumenda laudantium fugit nobis nisi repudiandae sit voluptatum corrupti eaque, quasi maxime nostrum nam perspiciatis est. Beatae, similique qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque esse, assumenda laudantium fugit nobis nisi repudiandae sit voluptatum corrupti eaque, quasi maxime nostrum nam perspiciatis est. Beatae, similique qui.</span>
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
        <br />
        <br />

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde accusantium praesentium neque eveniet sunt obcaecati. Mollitia, beatae libero doloremque ratione quod in deserunt esse aliquid odit et quia possimus!
          Dolorem ab optio voluptate mollitia veniam itaque, autem amet, ex harum commodi, cupiditate aut soluta reiciendis sapiente ipsum! Suscipit expedita eos unde, minima ipsam aperiam et! Quisquam sequi magni doloribus!
          Repellendus vitae incidunt architecto distinctio, nulla ullam beatae itaque consequuntur similique, illo, voluptatibus qui suscipit esse harum voluptate veritatis dignissimos! Ipsa quam repellendus qui fugit reiciendis, quis pariatur similique! Odit?
          Laborum dolor repellat eveniet ex ipsa ullam velit in inventore repellendus expedita atque recusandae ipsum libero odit molestias praesentium facere debitis amet iste aperiam, itaque modi hic quo sed. Natus.
          Ullam voluptate illo, tempora numquam itaque ad? Repellendus debitis consequatur perspiciatis corporis odit, hic, fugit et, maxime dolores totam excepturi necessitatibus magnam asperiores alias nulla molestias rem porro eum obcaecati.
          Culpa nobis quisquam dolores aut libero doloribus animi labore, veritatis nam cum porro, corrupti quas recusandae suscipit. Maxime quas voluptatem dignissimos consequuntur in. Fugiat molestias beatae aspernatur quae impedit molestiae.
          Dignissimos rerum ea voluptates, neque temporibus eius dolorem corrupti quo consectetur facilis commodi molestias exercitationem accusamus in esse sit iste illum molestiae corporis itaque odio. Sequi repellat veniam porro qui.
          Voluptatum alias, vitae esse maiores laborum dolor quae et libero a velit earum. Quam, quidem? Dolorem, reiciendis modi doloremque, eveniet aperiam earum unde magnam culpa error distinctio, dignissimos eos vitae?
          Maiores ipsum porro nostrum ratione earum illum necessitatibus similique sunt placeat aperiam explicabo ducimus fuga suscipit vitae blanditiis quae at commodi, ullam, tempore ipsam exercitationem aut saepe eos excepturi? Ipsum.
          Atque numquam omnis illo! Nam rem numquam laborum at dicta odio iure temporibus voluptas voluptatum, laudantium asperiores? Harum sed optio, molestias delectus commodi, ipsam praesentium maiores quisquam, iste dolorum nobis?
          Impedit, quis ipsum quaerat eaque eius quam ut, iusto sit consequatur quisquam hic nulla facilis fugiat eveniet id delectus perspiciatis dolorem placeat modi libero harum recusandae commodi sunt. Saepe, voluptates?
          Ab ipsam porro, dignissimos facere magni in. Sed molestias sunt fuga quisquam fugit eveniet, ipsam, harum beatae quas magni vero asperiores laborum unde quia repellat, corporis veritatis? Natus, officiis iste.
          Quam tenetur culpa vel ut veniam in velit, expedita neque, aspernatur eveniet sed quae ipsam repudiandae. Magnam distinctio quasi nulla quia sequi consectetur dolorem, esse expedita, aut iure culpa aliquid!
          Minima aliquam beatae autem, accusantium rem minus placeat dolorem, magni sunt iste laborum alias nulla cumque incidunt maxime nobis asperiores, iure eum eaque amet est sint animi consequuntur nihil! Ratione!
          Esse, in amet expedita, magnam fuga deserunt eaque, quaerat adipisci deleniti porro itaque quos quisquam quidem cupiditate illum iste nisi consectetur! Quaerat debitis temporibus quis aspernatur ut voluptate illum odio!
          Enim mollitia ducimus iusto optio velit ipsum doloremque saepe vel. Odit praesentium, doloremque reprehenderit voluptatum enim aperiam autem id cupiditate consectetur, perferendis voluptate iusto. Dignissimos voluptatem tempora eos voluptatum deleniti.
          Ducimus excepturi repellendus minus quasi architecto assumenda cum fugit necessitatibus quibusdam quod, numquam, molestias magni veritatis! Tempora repellendus nisi excepturi amet iusto, consequatur, asperiores, sed minima vero dolor pariatur laboriosam?
          Quos itaque nostrum aspernatur eius incidunt, non est magni possimus numquam deserunt voluptatum tempore doloremque repellat cumque enim dolores id nemo vitae voluptates fuga asperiores, veniam iusto ipsum eum! Ipsum.
          Pariatur inventore eius, aspernatur, beatae esse maiores repudiandae nisi numquam illo est excepturi impedit, laborum tempora dignissimos molestiae nostrum provident hic cupiditate! Vero velit qui perferendis ducimus corrupti? Molestiae, aspernatur?
          Nesciunt perferendis, debitis ratione unde numquam hic. Dignissimos provident, inventore maiores eius enim, numquam quae praesentium laboriosam odit explicabo at. Culpa, facilis. Odio fuga, necessitatibus quasi sapiente minus error praesentium.
          Et sapiente ipsum sit consequatur voluptates eveniet, ad quos vel facilis quam alias, iste incidunt eaque ipsam, a odio totam amet accusamus? Consectetur dicta praesentium quas est, sed sint esse?
          Minima non sint ipsa eum iusto voluptatibus illum aperiam a. Sapiente nam cupiditate, soluta non blanditiis veritatis error ducimus, dignissimos possimus quibusdam perferendis libero sunt tempora molestias, neque rerum dicta?
          Magnam eveniet assumenda quibusdam dolores deleniti, rem reprehenderit ipsa tempore quae praesentium laborum corporis? Perspiciatis, inventore, aperiam architecto quisquam iusto incidunt sequi quas error tenetur quasi a atque dolore quidem.
          Id, eos numquam! Vitae id, odit eius asperiores commodi et, excepturi aliquam suscipit est quibusdam cumque? Delectus architecto consequatur error magnam, ab velit harum veritatis, aliquam accusantium minima iste ut!
          Dolore natus, iusto, ipsa ex nihil aperiam, minus numquam deleniti quisquam tenetur odio voluptatibus in? Omnis unde hic cumque quidem deserunt incidunt adipisci odit dolore dolorum nam recusandae, ea nemo.
          Laborum tenetur iure ipsum asperiores perferendis velit, doloremque maxime fuga qui deserunt harum cupiditate ullam labore libero. Odio aspernatur cumque assumenda consectetur, dolorem ex amet voluptates dolorum molestiae id molestias!
          Blanditiis officiis alias, non magnam provident corporis? Provident fugiat, id nulla et sapiente perspiciatis dolores nisi praesentium consequatur ea eaque mollitia. Ex dolores dolore vel molestias incidunt nisi voluptate magnam.
          Magnam quisquam quae quidem repellat perspiciatis dolore excepturi id veniam, fugiat animi vitae obcaecati accusamus vel saepe possimus soluta atque, repellendus architecto dicta eaque aspernatur? Esse nemo perspiciatis dolorem non?
          Cumque non reprehenderit recusandae, perferendis, dolore, ut mollitia unde quidem doloribus voluptatum reiciendis eos molestias voluptas. Libero id odio voluptas, molestias illo ab ducimus amet perspiciatis quia autem fugiat. Quaerat!
          Incidunt, eveniet tenetur facere ullam repudiandae corporis. Aliquam, similique sint tempora distinctio vitae quisquam officiis commodi cumque repudiandae odit minus at fugit suscipit dolores aspernatur id libero iusto, molestiae quasi.
          Aspernatur aut id, eveniet est temporibus eos sed? Ipsam fugit assumenda, ab repellat nisi suscipit deserunt, cumque soluta laudantium odio autem vel saepe officiis quas, repellendus tempore ut consectetur amet?
          At culpa ut tenetur inventore assumenda sed ipsa libero distinctio nisi natus, necessitatibus, hic iusto adipisci temporibus, perferendis odio. Sequi quae unde iure quisquam cumque quos alias mollitia dolorem cupiditate!
          Sint, reprehenderit molestias error saepe distinctio modi officia nihil reiciendis! Rem reiciendis quibusdam perspiciatis quasi sunt ab sequi quaerat fugit consequuntur, perferendis adipisci aperiam distinctio eligendi, aut commodi, animi temporibus.
          Commodi recusandae maiores dicta fuga vero eligendi a optio eius. Explicabo maxime, voluptatem eaque quia dolorum aspernatur similique, reprehenderit cumque, corporis repellat necessitatibus. Quisquam blanditiis dolores fugiat. Dolorum, excepturi asperiores.
          Aliquam assumenda, provident magnam totam aspernatur consequatur laborum voluptas ullam vero architecto! Optio, totam sapiente? Architecto praesentium culpa a reprehenderit blanditiis incidunt debitis aspernatur esse fugit, modi quia hic dolore.
          Dolorem, ex praesentium voluptas omnis eos eaque tempore cumque. Molestias alias provident veritatis quaerat, beatae assumenda voluptates nisi nulla dignissimos velit ut aspernatur eos. Officia molestiae fugiat corrupti sit cum.
          Illum adipisci tempore commodi vel delectus voluptas sunt aliquid error? Veniam, minus nesciunt? Reprehenderit rem iure maxime corporis. Hic modi, alias neque eveniet aliquid a exercitationem inventore fugit porro. Tenetur.
          Voluptate id eum eligendi aut modi eaque dolor magnam architecto consequatur. Adipisci maiores, commodi, cum vel cumque obcaecati itaque ad autem odio enim quibusdam! Facilis ratione minus officiis cum delectus?
          Officia, possimus! Architecto eaque atque voluptatem reiciendis tempora officiis eveniet molestias minima minus nulla cupiditate voluptates, quis earum, natus enim explicabo deleniti quia non assumenda quod vitae! Quas, modi assumenda.
          Veritatis, veniam ipsa. Eaque quibusdam beatae asperiores quae. Officiis reprehenderit atque amet quibusdam deleniti pariatur, magnam commodi optio dolorem minus, quod iusto labore dolorum omnis rerum aspernatur cum dolor quasi.
          Minus molestiae veniam eius illo aliquid. Ab eum natus necessitatibus similique quos molestias reiciendis, laudantium dolorem tenetur voluptate numquam maxime iste. Iste asperiores veniam perspiciatis accusamus ipsum esse nulla aliquid.
          Quis, praesentium? Distinctio illo, aliquam necessitatibus corrupti tempora iste accusamus mollitia repellat. Quas omnis itaque libero vero deserunt. Quidem in placeat culpa quasi dolorum ipsum nam alias itaque magni sed!
          Et expedita minus laudantium earum reiciendis harum ea aliquid ullam, voluptatum porro necessitatibus itaque ducimus! Odit placeat, libero labore neque deserunt culpa aliquam laborum sed nesciunt accusantium, facere mollitia hic?
          Vel totam praesentium adipisci rerum quibusdam cumque eveniet pariatur, assumenda provident minima ex blanditiis voluptatum facilis, doloremque sapiente. Praesentium blanditiis harum fugiat quis cupiditate ipsam dignissimos dolorem reiciendis commodi quisquam?
          Odit, nemo autem tempore delectus consequatur quas id, inventore explicabo possimus non fuga omnis iste, reiciendis amet sint rerum dignissimos odio minima libero sunt enim doloribus. Reprehenderit qui iusto nam?
          Sint quaerat cum explicabo doloremque, id quam harum! Adipisci minus eligendi libero natus harum ex veritatis eveniet nobis sit saepe! Dolor deserunt, aliquid facilis at recusandae consequatur asperiores sequi sit.
          Eaque molestias aspernatur error laborum consequuntur voluptatibus, vitae unde. Debitis soluta laboriosam consequatur numquam esse fuga voluptatem dolore blanditiis alias libero. Quia dignissimos officiis aspernatur blanditiis provident quibusdam, amet minus.
          Libero, ut tempora! Dignissimos aut cumque iure magnam exercitationem blanditiis voluptatibus, id reprehenderit eligendi beatae nihil temporibus incidunt, ipsa cum voluptate rem quo laudantium iusto deleniti, impedit officiis! Animi, ad!
          Non magnam officiis, inventore saepe similique consequuntur eius sapiente beatae provident! Recusandae voluptatum dicta nobis reiciendis libero eos, aliquam consequatur unde, tenetur quia aliquid iste assumenda quibusdam distinctio officia illo.
          Ipsa ducimus, culpa quas possimus voluptatum dicta amet excepturi optio quam, odio voluptatibus labore. Mollitia odio magnam, doloremque harum vel voluptatem in exercitationem ea, nihil tenetur voluptatibus voluptatum hic iure.
        </div>
      </Content>
    </Layout>
  );
};

export default App;