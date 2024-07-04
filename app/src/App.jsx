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

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";


function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element:(
        <ProtectedRoute>
           <Support />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
        <Signup />
      </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register-email-verify/:email",
      element:(
        <AlreadySigninRoute>
           <RegisterEmailVerify />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess/>
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (<AlreadySigninRoute>
        <ForgetPassword/>
      </AlreadySigninRoute>),
    },
    {
      path: "/forgot-success/:email",
      element:(<AlreadySigninRoute>
         <ForgotPasswordSent />
      </AlreadySigninRoute>),
    },
    {
      path: "/reset-password-verify/:token",
      element: (<AlreadySigninRoute>
        <ResetPassword />
      </AlreadySigninRoute>),
    },
    {
      path: "/password-reset-done",
      element:(<AlreadySigninRoute>
         <PasswordResetDone />
      </AlreadySigninRoute>),
    },
  ]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary> {/* Wrap RouterProvider with ErrorBoundary */}
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
