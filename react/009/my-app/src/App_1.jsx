import './App.css'
function App() {
  const someStyle = {backgroundColor:"black", color:"white"}
  const name = "예은";
  function age(){
    return 10
  }
  const 값 = true;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hrs = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return (
    <div>
      {/* 주석! */}
      <h1 className="one">hello world</h1>
      <h1 style={{backgroundColor:"black", color:"white"}}>hello world</h1>
      <h1>hello {name}, {age()}</h1>
      <p>{값?'one':'two'}</p>
      <h1 style={someStyle}>hello world</h1>
      <h1>년:{year}</h1>
      <h1>월/일:{month}/{date}</h1>
      <h1>시간:{hrs}시{min}분{sec}초</h1>
    </div>
  );
}

export default App;