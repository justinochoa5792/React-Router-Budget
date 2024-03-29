import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Routes
import Dashboard, { dashboadAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layout/Main";
import { logoutAction } from "./logout";
import { deleteBudget } from "./DeleteBudget";
//toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";
import BudgetPage, { budgetLoader, bugdetAction } from "./pages/BudgetPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: dashboardLoader,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: dashboardLoader,
          action: dashboadAction,
          errorElement: <Error />,
        },
        {
          path: "logout",
          action: logoutAction,
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          loader: expensesLoader,
          action: expensesAction,
          errorElement: <Error />,
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          loader: budgetLoader,
          action: bugdetAction,
          errorElement: <Error />,
          children: [
            {
              path: "delete",
              action: deleteBudget,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
