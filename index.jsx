import React, { Component } from "react";
import classNames from "classnames";

import { INITIAL_VALUES, SIGNUPFORM_REG } from "./formUtils";
import Form from "./Form.jsx";
import styles from "./LoginForm.module.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: INITIAL_VALUES.fullName,
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
      passwordConf: INITIAL_VALUES.passwordConf,
      isAgreed: false,

      isFullNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPasswordConfValid: false,
    };
  }

  handleFullNameChange = ({ target: { value } }) => {
    this.setState({
      fullName: value,
      isFullNameValid: SIGNUPFORM_REG.fullName.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: SIGNUPFORM_REG.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: SIGNUPFORM_REG.password.test(value),
      isPasswordConfValid:
        value === this.state.passwordConf &&
        SIGNUPFORM_REG.passwordConf.test(this.state.passwordConf),
    });
  };

  handlePasswordConfChange = ({ target: { value } }) => {
    this.setState({
      passwordConf: value,
      isPasswordConfValid:
        value === this.state.password &&
        SIGNUPFORM_REG.passwordConf.test(value),
    });
  };

  handleCheckboxChange = ({ target: { checked } }) => {
    this.setState({
      isAgreed: checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      isFullNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfValid,
      isAgreed,
    } = this.state;

    if (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfValid &&
      isAgreed
    ) {
      console.log("Account create ", this.state);

      this.setState({
        ...INITIAL_VALUES,
        isAgreed: false,
        isFullNameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
        isPasswordConfValid: false,
      });
    } else {
      console.log("Error: Form is invalid");
    }
  };

  render() {
    const {
      fullName,
      email,
      password,
      passwordConf,
      isAgreed,
      isFullNameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfValid,
    } = this.state;

    const inputClasses = {
      fullNameClassName: classNames(styles.input, {
        [styles.inputValid]: fullName && isFullNameValid,
        [styles.inputInvalid]: fullName && !isFullNameValid,
      }),
      emailClassName: classNames(styles.input, {
        [styles.inputValid]: email && isEmailValid,
        [styles.inputInvalid]: email && !isEmailValid,
      }),
      passwordClassName: classNames(styles.input, {
        [styles.inputValid]: password && isPasswordValid,
        [styles.inputInvalid]: password && !isPasswordValid,
      }),
      passwordConfClassName: classNames(styles.input, {
        [styles.inputValid]: passwordConf && isPasswordConfValid,
        [styles.inputInvalid]: passwordConf && !isPasswordConfValid,
      }),
    };

    const handlers = {
      handleFullNameChange: this.handleFullNameChange,
      handleEmailChange: this.handleEmailChange,
      handlePasswordChange: this.handlePasswordChange,
      handlePasswordConfChange: this.handlePasswordConfChange,
      handleCheckboxChange: this.handleCheckboxChange,
      handleSubmit: this.handleSubmit,
    };

    return (
      <article className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Your Account</h1>
          <Form
            data={this.state}
            classNames={inputClasses}
            handlers={handlers}
          />
        </div>
      </article>
    );
  }
}
