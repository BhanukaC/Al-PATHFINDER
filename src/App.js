import "./styles.css";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword";
import UpdateDetails from "./components/UpdateDetails";
import SearchTeacher from "./components/SearchTeacher";
import { AuthProvider } from "./context/AuthContext";
import TeacherProfile from "./components/TeacherProfile";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />{" "}
              <PrivateRoute
                path="/update-password"
                component={UpdatePassword}
              />{" "}
              <PrivateRoute
                path="/search-teacher"
                component={SearchTeacher}
                exact
              />{" "}
              <PrivateRoute
                path="/search-teacher/:id"
                component={TeacherProfile}
              />{" "}
              <PrivateRoute path="/update-details" component={UpdateDetails} />{" "}
              <Route path="/signup" component={Signup} />{" "}
              <Route path="/login" component={Login} />{" "}
              <Route path="/forgot-password" component={ForgotPassword} />{" "}
            </Switch>{" "}
          </AuthProvider>{" "}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
