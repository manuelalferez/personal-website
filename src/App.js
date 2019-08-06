import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Post from "./Component/Blog/Post";
import ReactGA from "react-ga";

ReactGA.initialize("UA-135366462-1");

const onUpdate = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} onUpdate={onUpdate}/>
          <Route exact path="/contact" component={Contact} onUpdate={onUpdate}/>
          <Route exact path="/blog" component={Blog} onUpdate={onUpdate}/>
          <Route exact path="/blog/post/:id" component={Post} onUpdate={onUpdate}/>
          <Route component={PageNotFound} onUpdate={onUpdate} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
