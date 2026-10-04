import React, { Component } from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";
import { INITIAL_VALUES, SIGNUPFORM_REG } from "./formUtils";

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

    const fullNameClassName = classNames(styles.input, {
      [styles.inputValid]: fullName && isFullNameValid,
      [styles.inputInvalid]: fullName && !isFullNameValid,
    });

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: email && isEmailValid,
      [styles.inputInvalid]: email && !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: password && isPasswordValid,
      [styles.inputInvalid]: password && !isPasswordValid,
    });

    const passwordConfClassName = classNames(styles.input, {
      [styles.inputValid]: passwordConf && isPasswordConfValid,
      [styles.inputInvalid]: passwordConf && !isPasswordConfValid,
    });

    return (
      <article className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Your Account</h1>

          <form onSubmit={this.handleSubmit}>
            <label className={styles.inputGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                className={fullNameClassName}
                onChange={this.handleFullNameChange}
                autoFocus
              />
            </label>
            <label className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                className={emailClassName}
                onChange={this.handleEmailChange}
              />
            </label>
            <label className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                className={passwordClassName}
                onChange={this.handlePasswordChange}
              />
            </label>
            <label className={styles.inputGroup}>
              <input
                type="password"
                name="passwordConf"
                placeholder="Confirm Password"
                value={passwordConf}
                className={passwordConfClassName}
                onChange={this.handlePasswordConfChange}
              />
            </label>
            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="isAgreed"
                className={styles.checkboxInput}
                checked={isAgreed}
                onChange={this.handleCheckboxChange}
              />
              <span className={styles.checkboxText}>
                I Agree All Statements In Terms Of Service
              </span>
            </label>
            <button type="submit" className={styles.submitBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </article>
    );
  }
}
