import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => <div>Page One</div>
const PageTwo = () => <div>Page Two</div>

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