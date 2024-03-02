import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          const Component = lazy(() =>
            import(`../pages/${routeItem.component}`)
          );
          return (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              exact={routeItem.exact}
              render={(props) => <Component {...props} />}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
