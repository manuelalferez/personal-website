import React from "react";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/blog' component={Blog}/>
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
