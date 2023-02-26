import React from "react";
import { Form, NavLink } from "react-router-dom";
//assest
import logomark from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logomark} />
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="logout">
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
