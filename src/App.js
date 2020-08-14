import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Main from "components/MainContainer";
import Home from "pages/Home";
import Error404 from "components/Error404";
import "./App.scss";
import Footer from "components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Main>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="*" component={Error404}></Route>
        </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;
