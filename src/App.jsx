import { useState } from 'react';

function App() {
  // let boolean = true;
  let [boolean, setBoolean] = useState(true);
  
  const changeValue = () => {
    setBoolean(!boolean);
    // console.log('changing boolean from ', boolean);
    // boolean = !boolean;
    // console.log('boolean is now ', boolean);
  }
  
  // let content;

  // if (boolean === false) {
  //   content = 'the boolean is false'
  // } else if (boolean === true){
  //   content = 'the boolean is true'
  // } else {
  //   content = 'the variable called boolean is not actually a boolean value :('
  // }

  return (
    <div className="App">
      <p>Hello World!</p>
      {/* <p>{content}</p> */}
      <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p>
      <button onClick={changeValue}>CLICK ME</button>
    </div>
  );
}

export default App;
