import Header from "./components/header";
import "./App.css";
import HomePage from "./screen/home";
function App() {
  return (
    <div className="bg-container">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <HomePage />
      </div>
    </div>
  )
}
export default App;
