import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import VideosList from "./videos/VideosList";
import VideosShow from "./videos/VideosShow";
import VideosCreate from "./videos/VideosCreate";
import VideosEdit from "./videos/VideosEdit";
import VideosDestroy from "./videos/VideosDestroy";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          {/* With Switch - we are able to find the first route that matches the path 
          and display only that specific route 
          kind of like switch statement.
          whenever it finds the correct and exact path. it just displays the content
          associated with that path only. Handy solution */}
          <Switch>
            <Route path="/" exact component={VideosList} />
            {/* For show and create pages the path are appear to be same 
            for React Router. :id === new in this case. This is the reason why we see 
            this bug happening. In order to fix this we will import another dependency
            in our project. */}
            <Route path="/videos/new" exact component={VideosCreate} />
            <Route path="/videos/:id" exact component={VideosShow} />
            {/* Route Urls has params and can be written like so "/videos/edit/:someid/:anythingelse/:seriously/:andsoOn" */}
            <Route path="/videos/edit/:id" exact component={VideosEdit} />
            <Route path="/videos/del/:id" exact component={VideosDestroy} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//Notes: the path property works on a principle of 'contains' function
//If a path prop contains a string value those route components are invoked
//In order to avoid this use 'exact' set to true
// using exact changes the default behavior of the path prop
//now it works on the principle of '==='

//Use of Anchor tags is bad if we are using react
//anchor tags dumps all the javascript code and attempt to get a brand new request
//with anchor tags you can see the page refreshes which equates to completely new html
//if we are working with apis and data handling this is not recommended.
