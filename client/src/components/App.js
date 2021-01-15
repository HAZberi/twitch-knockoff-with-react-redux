import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VideosList from "./videos/VideosList";
import VideosShow from "./videos/VideosShow";
import VideosCreate from "./videos/VideosCreate";
import VideosEdit from "./videos/VideosEdit";
import VideosDestroy from "./videos/VideosDestroy";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={VideosList} />
          <Route path="/videos/show" exact component={VideosShow} />
          <Route path="/videos/new" exact component={VideosCreate} />
          <Route path="/videos/edit" exact component={VideosEdit} />
          <Route path="/videos/del" exact component={VideosDestroy} />
        </div>
      </BrowserRouter>
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
