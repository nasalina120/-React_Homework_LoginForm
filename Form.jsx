import React from "react";
import styles from "./LoginForm.module.css";

export default function Form({ data, classNames, handlers }) {
  const { fullName, email, password, passwordConf, isAgreed } = data;

  const {
    fullNameClassName,
    emailClassName,
    passwordClassName,
    passwordConfClassName,
  } = classNames;

  const {
    handleFullNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordConfChange,
    handleCheckboxChange,
    handleSubmit,
  } = handlers;

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.inputGroup}>
        <span className={styles.labelText}>Full Name</span>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          className={fullNameClassName}
          onChange={handleFullNameChange}
          autoFocus
        />
      </label>

      <label className={styles.inputGroup}>
        <span className={styles.labelText}>Email Address</span>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          className={emailClassName}
          onChange={handleEmailChange}
        />
      </label>

      <label className={styles.inputGroup}>
        <span className={styles.labelText}>Password</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          className={passwordClassName}
          onChange={handlePasswordChange}
        />
      </label>

      <label className={styles.inputGroup}>
        <span className={styles.labelText}>Confirm Password</span>
        <input
          type="password"
          name="passwordConf"
          placeholder="Confirm Password"
          value={passwordConf}
          className={passwordConfClassName}
          onChange={handlePasswordConfChange}
        />
      </label>

      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          name="isAgreed"
          className={styles.checkboxInput}
          checked={isAgreed}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkboxText}>
          I Agree All Statements In Terms Of Service
        </span>
      </label>
      <button type="submit" className={styles.submitBtn}>
        Sign Up
      </button>
    </form>
  );
}
