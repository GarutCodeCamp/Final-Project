import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login";
import PrivateRoute from "./Private";
import { Routes } from "./Route";
import { RootState } from "../redux/store";

const ListeningOnRoute = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <React.Suspense fallback={<h1>Waiting ....</h1>}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isLogin ? <Redirect to="/create-playlist" /> : <Login />
            }
          />
          {Routes.map((route) => (
            <PrivateRoute
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default ListeningOnRoute;
