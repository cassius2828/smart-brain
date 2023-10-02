import React from "react";
import "./Register.css";

export const Register = ({ handleSignUp, handleSignIn }) => {
  return (
    <>
      <main class="pa4 black-80 main-form-container mt5 white">
        <div class=" shadow-2 measure center tc">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Register</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="name">
                Name
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
              <label class="db fw6 lh-copy f6" for="email-address">
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
              <label class="db fw6 lh-copy f6" for="create-password">
                Create Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-white w-100"
                type="password"
                name="create-password"
                id="create-password"
              />
              <label class="db fw6 lh-copy f6" for="confirm-password">
                Confirm Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-white w-100"
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
          </fieldset>
          <div class="">
            <input
              onClick={handleSignUp}
              class=" white b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign Up"
            />
          </div>
        </div>
      </main>
    </>
  );
};
