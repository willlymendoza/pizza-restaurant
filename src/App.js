import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Main from "components/MainContainer";
import Home from "pages/Home";
import Error404 from "components/Error404";
import "./App.scss";
import Footer from "components/Footer";
import About from "pages/About";
import Menu from "pages/Menu";
import Blog from "pages/Blog";
import Contact from "pages/Contact";

function App() {
  return (
    <Router>
      <Header />

      <Main>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/menu" exact component={Menu}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/contact" exact component={Contact}></Route>

          <Route path="*" component={Error404}></Route>
        </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;
