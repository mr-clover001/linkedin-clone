import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>

      {/* nav */}
      {/* sidebar */}
      {/* feed component */}
      {/* news component */}
    </div>
  );
}

export default App;
