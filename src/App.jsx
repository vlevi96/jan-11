import { useState } from 'react';

function App() {
  // let boolean = true;
  let [boolean, setBoolean] = useState(true);
  
  const changeValue = () => {
    setBoolean(!boolean);
    // boolean = !boolean;
  }
  
  // let content;

  // if (boolean === false) {
  //   content = 'the boolean is false'
  // } else if (boolean === true){
  //   content = 'the boolean is true'
  // } else {
  //   content = 'the variable called boolean is not actually a boolean value :('
  // }

  // let pageName = 'Home';
  let [pageName, setPageName] = useState('Landing');

  return (
    <div className="App">
      <div>
        <p>Hello World!</p>
        {/* <p>{content}</p> */}
        <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p>
        <button onClick={changeValue}>CLICK ME</button>
      </div>

      <hr/>
      
      <button onClick={() => setPageName('Home')}>Home</button>
      <button onClick={() => setPageName('About')}>About</button>
      <button onClick={() => setPageName('Landing')}>Landing</button>

      {pageName === 'Home' && <div>text here</div>}
      {pageName === 'About' && <div><h1>text here</h1></div>}
      {pageName === 'Landing' && <div><input type="text" placeholder='input' /></div>}
    </div>
  );
}

export default App;
