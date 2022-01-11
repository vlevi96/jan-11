function App() {
  let boolean = false;
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p>
    </div>
  );
}

export default App;
