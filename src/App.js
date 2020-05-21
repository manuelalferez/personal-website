import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Post from "./Component/Blog/Post";
import GA from "./GoogleAnalytics";
import ScrollToTop from "./Component/ScrollToTop";
import Work from "./Component/Work/Work";
import Resumen from "./Component/Resumen/Resumen";


function App() {
  return (
    <BrowserRouter>
      {GA.init() && <GA.RouteTracker />}
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/resumen" component={Resumen} />
            <Route exact path="/blog/post/:id" component={Post} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
