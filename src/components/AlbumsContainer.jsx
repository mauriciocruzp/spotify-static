import '../assets/css/albums-container.css';
import Album from './Album';
import Paris from '../assets/images/covers/paris-texas.webp';
import New from '../assets/images/covers/the-new.webp';
import Currents from '../assets/images/covers/currents.webp';
import Proano from '../assets/images/covers/proano.webp';
import Sai from '../assets/images/covers/sai.webp';
import Trinchera from '../assets/images/covers/trinchera.webp';
import ORRO from '../assets/images/covers/orro.webp';
import Cero from '../assets/images/covers/00.webp';
import AM from '../assets/images/covers/am.webp';
import Appetite from '../assets/images/covers/appetite.webp';
import Unlimited from '../assets/images/covers/unlimited.webp';
import Blurryface from '../assets/images/covers/blurryface.webp';
import Californication from '../assets/images/covers/californication.webp';
import Daltonico from '../assets/images/covers/daltonico.webp';
import Dark from '../assets/images/covers/dark-side.webp';
import Fin from '../assets/images/covers/fin.webp';
import Harry from '../assets/images/covers/harry.webp';
import Madrileno from '../assets/images/covers/madrileno.webp';
import Opera from '../assets/images/covers/opera.webp';
import Pablo from '../assets/images/covers/pablo.webp';
import Proximos from '../assets/images/covers/proximos.webp';
import RAM from '../assets/images/covers/ram.webp';
import Tabaco from '../assets/images/covers/tabaco.webp';
import Verano from '../assets/images/covers/verano.webp';
import Wall from '../assets/images/covers/wall.webp'


function AlbumsContainer() {
  let albumsArray = [
    {
      "cover": Paris,
      "name": "Paris Texas",
      "artist": "Kevin Kaarl",
      "number": 13
    },
    {
      "cover": New,
      "name": "The New Abnormal",
      "artist": "The Strokes",
      "number": 15
    },
    {
      "cover": Currents,
      "name": "Currents",
      "artist": "Tame Impala",
      "number": 13
    },
    {
      "cover": Proano,
      "name": "Proaño",
      "artist": "Enjambre",
      "number": 14
    },
    {
      "cover": Sai,
      "name": "Scaled and Icy",
      "artist": "Twenty One Pilots",
      "number": 11
    },
    {
      "cover": Trinchera,
      "name": "Trinchera",
      "artist": "Babasónicos",
      "number": 11
    },
    {
      "cover": ORRO,
      "name": "ORRO",
      "artist": "Deorro",
      "number": 19
    },
    {
      "cover": Cero,
      "name": "00:00",
      "artist": "Siddhartha",
      "number": 10
    },
    {
      "cover": AM,
      "name": "AM",
      "artist": "Arctic Monkeys",
      "number": 12
    },
    {
      "cover": Appetite,
      "name": "Appetite For Destruction",
      "artist": "Guns N' Roses",
      "number": 12
    },
    {
      "cover": Unlimited,
      "name": "Unlimited Love",
      "artist": "Red Hot Chili Peppers",
      "number": 17
    },
    {
      "cover": Blurryface,
      "name": "Blurryface",
      "artist": "Twenty One Pilots",
      "number": 14
    },
    {
      "cover": Californication,
      "name": "Californication",
      "artist": "Red Hot Chili Peppers",
      "number": 15
    },
    {
      "cover": Daltonico,
      "name": "Daltonico",
      "artist": "Enjambre",
      "number": 13
    },
    {
      "cover": Dark,
      "name": "The Dark Side of the Moon",
      "artist": "Pink Floyd",
      "number": 10
    },
    {
      "cover": Fin,
      "name": "Hasta El Fin Del Mundo",
      "artist": "Kevin Kaarl",
      "number": 12
    },
    {
      "cover": Harry,
      "name": "Harry's House",
      "artist": "Harry Styles",
      "number": 13
    },
    {
      "cover": Madrileno,
      "name": "El Madrileño",
      "artist": "C. Tangana",
      "number": 14
    },
    {
      "cover": Opera,
      "name": "A Night At The Opera",
      "artist": "Queen",
      "number": 12
    },
    {
      "cover": Pablo,
      "name": "Pablo Honey",
      "artist": "Radiohead",
      "number": 12
    },
    {
      "cover": Proximos,
      "name": "Proximos Projimos",
      "artist": "Enjambre",
      "number": 13
    },
    {
      "cover": RAM,
      "name": "Random Access Memories",
      "artist": "Daft Punk",
      "number": 13
    },
    {
      "cover": Tabaco,
      "name": "Tabaco y Uñas",
      "artist": "The Shelter",
      "number": 9
    },
    {
      "cover": Verano,
      "name": "Un Verano Sin Ti",
      "artist": "Bad Bunny",
      "number": 23
    },
    {
      "cover": Wall,
      "name": "The Wall",
      "artist": "Pink Floyd",
      "number": 26
    },
  ];

  albumsArray.sort((a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  });

  return (
    <div className="container">
      <div className='albums'>
        {albumsArray.map(album => (<Album
          cover={album.cover} name={album.name} artist={album.artist} number={album.number} />
        ))}
      </div>
    </div>
  );
}

export default AlbumsContainer;