import "./App.css";
import Header from "./components/common/header";
import SearchBox from "./components/common/searchBox";
import Property from "./components/property";

function App({ guests }) {
  return (
    <main className="main">
      <Property />
    </main>
  );
}

export default App;
