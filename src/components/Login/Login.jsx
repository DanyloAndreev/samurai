import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import { createField } from "../../utils/helpers/elements/field";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <div>
        {/*<Field*/}
        {/*  component={Input}*/}
        {/*  validate={[required]}*/}
        {/*  placeholder={"email"}*/}
        {/*  name={"email"}*/}
        {/*/>*/}
        {createField("email", "email", Input, [required])}
      </div>
      <label htmlFor="password">Password</label>
      <div>
        {createField("password", "password", Input, [required], {
          type: "password",
        })}
      </div>
      <div>
        {createField("remember", null, "input", [required], {
          type: "checkbox",
        })}
        Remember me
      </div>
      {error && <div className={classes.formSummaryError}>{error}</div>}

      <button>Login</button>
    </form>
  );
};
const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.onSubmit(formData.email, formData.password);
  };

  // if (JSON.parse(props.isAuthorized).authorized) {
  //   return <Redirect to={"/profile"} />;
  // }
  return (
    <div>
      <h1>LOGIN</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
  // <span onClick={() => props.login(user.id)}>Login</span>;
};

const mapStateToProps = (state) => ({
  isAuthorized: sessionStorage.getItem("isAuthorized"),
});

export default connect(mapStateToProps, {})(Login);
