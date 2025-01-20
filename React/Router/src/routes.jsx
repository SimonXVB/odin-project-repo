import App from "./App";
import Profile from "./Profile";
import Error from "./Error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "error",
    element: <Error />
  }
];

export default routes;
