import { sculptureList } from './data.js';

function App() {
  let index = 4;
  let sculpture = sculptureList[index];

  function handleNextClick() {
    index = index + 1;
  }

  function handlePreviousClick(e) {
   console.log(e);
  }

  return (
   <>
    <button onClick={ handleNextClick }>Next</button>
    <button onClick={ handlePreviousClick }>Previous</button>

    <h2>
        <i> {sculpture.name} </i> by {sculpture.artist}
    </h2>
    <h3>
      ({ index + 1 } of {sculptureList.length})
    </h3>
    <img src={sculpture.url} alt={sculpture.alt} />
    <p>{sculpture.description}</p>
   </>
  ) 
}

export default App
