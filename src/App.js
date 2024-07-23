import "./App.css";
import MainNavigation from "./components/MainNavigation";
import Root from "./components/Root";

const App = () => {
  return (
    <div className="to-purple-700 bg-gradient-to-br from-pink-300 font-sans">
      <MainNavigation />
      <Root />
    </div>
  );
};

export default App;
