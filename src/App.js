import logo from "./logo-enigma-color.svg";
import "./App.css";

function getName() {
  return "Enigma Camp";
}

function App() {
  const bidang = "IT Bootcamp";
  return (
    <>
      <h1>React JSX</h1>
      {/* <img src="logo192.png" />
      <img src={logo} width={imageSize} /> */}

      <h1>Biodata Perusahaan</h1>
      <ul>
        <li>Nama: {getName()}</li>
        <li>Bidang: {bidang}</li>
        <img src={logo} alt="Enigma Logo" />
      </ul>
    </>
  );
}

export default App;
