import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
class App extends Component {

  render(){
      return (
          <RenderData />
      );
  }

}

export default App;
const RenderData= () => {


    return (
        <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            onUpdate={() => window.scrollTo(0, 0)}
                            exact path={"/"}
                            component={
                                ()=><HomePage  />
                            }/>
                        <Route
                            onUpdate={() => window.scrollTo(0, 0)}
                            exact path={"/auth/by/user/login"}
                            component={
                                ()=><HomePage  />
                            }/>
                        <Route
                            onUpdate={() => window.scrollTo(0, 0)}
                            exact path={"/user"}
                            component={
                                ()=><HomePage  />
                            }/>
                        <Route
                            exact={"/*"}
                            component={
                                ()=><NotFoundPage/>
                            }
                        />
                    </Switch>

                </BrowserRouter>
        </div>     )
}