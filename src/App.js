import "./App.css";
import { UserInfo } from "./components/UserInfo";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <UserList />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
