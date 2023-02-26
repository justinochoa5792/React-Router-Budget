import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "./Helpers";

export async function logoutAction() {
  deleteItem({ key: "userName" });
  toast.success("You've Deleted Your Account");
  return redirect("/");
}