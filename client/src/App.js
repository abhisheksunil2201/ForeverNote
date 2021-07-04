import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import Notebooks from "./pages/Notebooks";
import HomeNav from "./components/HomeNav";
import Notebook from "./pages/Notebook";

function App() {
  return (
    <AuthProvider>
      <Router>
        <HomeNav />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/notebooks" component={Notebooks} />
        <Route exact path="/notebooks/:notebook" component={Notebook} />
      </Router>
    </AuthProvider>
  );
}

export default App;
