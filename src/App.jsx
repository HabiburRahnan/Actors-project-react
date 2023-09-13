import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="bg-[url('./assets/img/image.jpg')] bg-cover bg-no-repeat bg-fixed h-full bg-blend-overlay  ">
      <h3 className="text-6xl text-center font-bold text-slate-950 mb-5">Actor Selection</h3>
      <div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
