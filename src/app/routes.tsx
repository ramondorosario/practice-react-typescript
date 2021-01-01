import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const LoginPage = React.lazy(() =>
  import("../containers/LoginPage").then((res): any => ({
    default: res.LoginPage,
  }))
);

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}
