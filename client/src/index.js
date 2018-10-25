import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import jwt_decode from "jwt-decode";

import setAuthToken from "./dist/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./dist/actions/authActions";
import { clearCurrentProfile } from "./dist/actions/profileActions";
import store from "./dist/storages/store";

import Login from "./login.jsx";
import Welcome from "./welcome.jsx";
import Mail from "./mail.jsx";
import Steps from "./steps.jsx";
import Settings from "./settings.jsx";
import Newmail from "./newmail.jsx";
import Content from "./content.jsx";

import './dist/css/bootstrap.min.css';
import './dist/css/quill.bubble.min.css';
import './dist/css/quill.snow.min.css';
import './dist/js/quill-emoji/dist/quill-emoji.css';
import './dist/css/fonts.css';
import './dist/css/StyleSheet.css';

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Manual Logout
  // store.dispatch(logoutUser());
  // store.dispatch(clearCurrentProfile());
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    //window.location.href = "/";
  }
}

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Route exact path="/" component={Login} />
						<Route path="/welcome" component={Welcome} />
						<Route path="/mail" component={Mail} />
						<Route path="/steps" component={Steps} />
						<Route path="/settings" component={Settings} />
						<Route path="/new_mail" component={Newmail} />
						<Route path="/content" component={Content} />
					</div>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
