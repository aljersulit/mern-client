import { Route, Routes } from "react-router-dom";

import UserList from "./components/UserList/UserList";
import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import EditUser from "./components/EditUser/EditUser";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">User Management System</h1>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateNewUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

