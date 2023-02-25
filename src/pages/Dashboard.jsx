import React from "react";
//react router dom
import { useLoaderData } from "react-router-dom";
//Helper Function
import { fetchData } from "../Helpers";

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}'s Dashboard</h1>
    </div>
  );
};

export default Dashboard;
