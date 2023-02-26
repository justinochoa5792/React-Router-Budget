import React from "react";
//react router dom
import { Outlet, useLoaderData } from "react-router-dom";
//Helper Function
import { fetchData } from "../Helpers";
//assests
import wave from "../assets/wave.svg";
//components
import Nav from "./Nav";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} />
    </div>
  );
};

export default Main;
