import React from "react";
//react router dom
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
//Helper Function
import { fetchData } from "../Helpers";
//components
import Intro from "./Intro";

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function dashboadAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account");
    console.log(error);
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
