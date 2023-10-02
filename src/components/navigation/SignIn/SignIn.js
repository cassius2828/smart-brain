import React from "react";
import "./SignIn.css";

export const SignIn = ({ handleRegister, handleSignIn }) => {
  return (
    <>
      <main class="pa4 black-80 main-form-container mt5 white">
        <div class=" form shadow-2 measure center tc">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div class="">
            <input
              onClick={handleSignIn}
              class=" white b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div class="lh-copy mt3">
            <p
              onClick={handleRegister}
              href="#0"
              class="white f6 link dim black db"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
