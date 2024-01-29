import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Salva" />

      <ImageComponent
        url="https://media.istockphoto.com/id/517188688/it/foto/paesaggio-di-montagna.jpg?s=612x612&w=0&k=20&c=3-yra8c7GyAenb5DTfF1x5XKFqGB1Gp6vXAtTf5fDNM="
        textAlt="Foto Paesaggio"
      />
      <ButtonComponent text="Ciao" />
      <ImageComponent
        url="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg"
        textAlt="Foto Paesaggio 2"
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
