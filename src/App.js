import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
