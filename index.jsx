import React, { Component } from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  password: "",
  passwordConf: "",
};

const SIGNUPFORM_REG = {
  fullName: /^[a-zA-Z']+\s+[a-zA-Z']+\s*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  passwordConf: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

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

  render() {
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
                autoFocus
              />
            </label>
            <label className={styles.inputGroup}>
              <input type="email" name="email" placeholder="Email Address" />
            </label>
            <label className={styles.inputGroup}>
              <input type="password" name="password" placeholder="Password" />
            </label>
            <label className={styles.inputGroup}>
              <input
                type="password"
                name="passwordConf"
                placeholder="Confirm Password"
              />
            </label>
            <label className={styles.checkboxContainer}>
              <input type="checkbox" name="isAgreed" />
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
