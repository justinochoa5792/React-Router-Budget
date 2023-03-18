import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "./Helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedItems = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedItems.forEach((expenses) => {
      deleteItem({
        key: "expenses",
        id: expenses.id,
      });
    });

    toast.success("Budget deleted successfully!");
    return redirect("/");
  } catch (error) {
    throw new Error("There was a problem deleting your budget");
  }
}
