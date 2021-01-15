import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";



const PageOne = () => <div>Page One <Link to="/pagetwo">Goto Page 2</Link></div>
const PageTwo = () => <div>Page Two <Link to="/">Goto Home Page</Link></div>

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}></Route>
          <Route path="/pagetwo" exact={true} component={PageTwo}></Route>
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