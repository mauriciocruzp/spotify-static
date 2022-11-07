import '../assets/css/album.css';

function Album(props) {
  return (
    <div className='album'>
      <img className='cover' src={props.cover} alt='' />
      <div className='info'>
        <div className='name'><strong>{props.name}</strong></div>
        <div className='artist'>{props.artist}</div>
        <div className='number-songs'>{props.number} canciones</div>
      </div>
    </div>
  );
}

export default Album;