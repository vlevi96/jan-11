function App() {
  let boolean = false;

  const changeValue = () => {
    console.log(boolean);
    boolean = !boolean;
    console.log(boolean);
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p>
      <button onClick={changeValue}>CLICK ME</button>
    </div>
  );
}

export default App;
