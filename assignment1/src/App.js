import './App.css';

function App() {
  const img1 = "https://media.istockphoto.com/photos/milky-way-glaxy-over-the-arizona-desert-near-tucson-picture-id1276813118?b=1&k=20&m=1276813118&s=170667a&w=0&h=FOSCY9Yg4osh9CBKnch2WantobVs8fk0pXJ5I-pHyGE=";
  const img2 = "https://media.istockphoto.com/photos/milky-way-star-shining-above-small-town-picture-id856601980?b=1&k=20&m=856601980&s=170667a&w=0&h=ZtvPTjZzK743KU03xplaa-S3SogVLKob3JkAfdaZjy8=";
  const img3 = "https://media.istockphoto.com/photos/milky-way-glaxy-and-stars-with-house-roof-top-picture-id1023919050?b=1&k=20&m=1023919050&s=170667a&w=0&h=aM-XGNSI4XWBGogpZMLrcUMXsPaJdPOMUjLQX5f7-bI=";
  const name = "RAVI";
  return (
    <div className="App">
    <h1 className='Heading'>{`my name is  ${name}`}</h1>
   <div className='mainDiv'>
   <img className='imgPic' src={img1} alt="random"/>
    <a href='https://www.google.com' target={"_blank" }>
    <img className='imgPic' src={img2} alt="random"/>
    </a>
    <img className='imgPic' src={img3} alt="random"/>
   </div>
    </div>
  );
}

export default App;
