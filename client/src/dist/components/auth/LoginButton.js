import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginButton extends Component {
  static propTypes = {
    clientId: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    fields: PropTypes.string.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.string
  };
  
  state = {
    loading: false
  };

  componentDidMount = () => {
    const { clientId } = this.props;
    this.loadSDK(clientId);
  };

  
  loadSDK = clientId => {
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const ljs = element;
      let js = element;
	  
      if (d.getElementById(id)) return;

      js = d.createElement(s);
      js.id = id;
      js.src = `//platform.linkedin.com/in.js`;
      js.text = `api_key: ${clientId}`;
	  

      ljs.parentNode.insertBefore(js, ljs);
    })(document, "script", "linkedin-jssdk");
  };

  callback = () => {
    this.setState({ loading: true });
    const { fields, callback } = this.props;

    window.IN.API.Raw(`/people/~${fields}`).result(r => {
      this.setState({ loading: false });
      callback(r);
    });
  };

  handleAuth = e => {
	  if(document.readyState === "complete")
		return window.IN.User.authorize(this.callback, "");
  };

  render() {
    const { className, buttonText } = this.props;


    return (
      <button onClick={this.handleAuth} className={className}>
        {buttonText}
      </button>
    );
  }
}

export default LoginButton;
