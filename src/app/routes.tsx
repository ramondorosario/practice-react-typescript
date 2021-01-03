import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const LoginPage = React.lazy(() =>
  import("../containers/LoginPage").then((res) => ({
    default: res.LoginPage,
  }))
);

const SignupPage = React.lazy(() =>
  import("../containers/SignupPage").then((res) => ({
    default: res.SignupPage,
  }))
);

const ForgotPassword = React.lazy(() =>
  import("../containers/ForgotPassword").then((res) => ({
    default: res.ForgotPassword,
  }))
);

const Home = React.lazy(() =>
  import("../containers/Home").then((res) => ({
    default: res.Home,
  }))
);

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
