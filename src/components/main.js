import poiloo from '../imgs/poiloo.jpg';
const Global = () => {
  return (
    <div className='don-wrapper'>
      <div className='presentation'>
        <img src={poiloo} alt='This is me' />
        <div className='sticky-line underline gradiant-line'></div>
        <div className='presentation-text'>
          <p>Hey! I'm</p>
          <p>Kevin</p>
          <p>I am a developer</p>
        </div>
        <div className='underline gradiant-line'></div>
      </div>
    </div>
  );
};

export default Global;
