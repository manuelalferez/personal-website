import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Post from "./Component/Blog/Post";
import GA from "./GoogleAnalytics";

function App() {
  return (
    <HashRouter>
      {GA.init() && <GA.RouteTracker />}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/post/:id" component={Post} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
