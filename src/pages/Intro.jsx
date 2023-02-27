import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your MONEY</span>
        </h1>
        <p>
          Personal budgeting is the secret to financialf freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="What is your name"
            aria-label="Your Name"
            autoComplete="given-name"
            required
          />
          <button type="submit" className="btn btn--dark">
            Create Account
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person" />
    </div>
  );
};

export default Intro;
