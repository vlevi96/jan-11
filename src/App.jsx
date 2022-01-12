import { useState } from 'react';
const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
  {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210km/h"},
  {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220km/h"},
]

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

  // let pageName = 'Home';
  let [pageName, setPageName] = useState('Landing');

  const [value,setValue]=useState("");
  console.log("rerender");
  console.log(value);
  // const transformToDiv=(carObject)=> <div>{carObject.brand} - {carObject.model}({carObject.topSpeed})</div>;
  // const transformToX=(carObject)=>
  // {
  //   return "x";
  // }
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
      
      <hr />

      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      {/* {value.length >=3 ? <button>Submit</button> : <button disabled>Submit</button>} */}
      <button disabled={value.length<3}>Submit</button>
      {value.length <3  && <p>Min. 3 char!</p>}

      {cars.filter(car=>car.brand.startsWith(value)).map(carObject=> <div key={carObject.model}>{carObject.brand} - {carObject.model}({carObject.topSpeed})</div>)}
    </div>

  
  );
}

export default App;
