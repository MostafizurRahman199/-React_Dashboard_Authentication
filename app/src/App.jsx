import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import PasswordResetDone from "./pages/Auth/PasswordResetDone/PasswordResetDone";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register-email-verify",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/register-email-success",
    element: <RegisterSuccess/>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword/>,
  },
  {
    path: "/forgot-password-sent",
    element: <ForgotPasswordSent />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/password-reset-done",
    element: <PasswordResetDone />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
