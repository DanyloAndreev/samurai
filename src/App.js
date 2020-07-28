import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { initThunk } from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/Suspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.initThunk();
  }

  render() {
    if (!this.props.initStatus) {
      return <Preloader />;
    } else {
      return (
        <div className={"wrapper"}>
          <HeaderContainer />
          <Navbar />
          <div className={"wrapper-content"}>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/news" render={() => <News />} />
            <Route exact path="/music" render={() => <Music />} />
            <Route exact path="/settings" render={() => <Settings />} />
            <Route exact path="/login" render={() => <LoginContainer />} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initStatus: state.appReducer.initStatus,
});
const AppContainer = compose(
  connect(mapStateToProps, { initThunk }),
  withRouter
)(App);
const SocialNetwork = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SocialNetwork;
