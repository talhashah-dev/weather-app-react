import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
