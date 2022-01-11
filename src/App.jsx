function App() {
  let boolean = true;
  let content;

  const changeValue = () => {
    console.log('changing boolean from ', boolean);
    boolean = !boolean;
    console.log('boolean is now ', boolean);
  }

  if (boolean === false) {
    content = 'the boolean is false'
  } else if (boolean === true){
    content = 'the boolean is true'
  } else {
    content = 'the variable called boolean is not actually a boolean value :('
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      {/* <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p> */}
      <p>{content}</p>
      <button onClick={changeValue}>CLICK ME</button>
    </div>
  );
}

export default App;
