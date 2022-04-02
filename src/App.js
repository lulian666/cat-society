import ScrollFeed from "./components/ScrollFeed";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollFeed />
        <ScrollFeed />
        <ScrollFeed />
        <ScrollFeed />
      </div>
    </BrowserRouter>
  );
}

export default App;
