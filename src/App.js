import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/redux/appStore";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Detailed from "./components/Detailed";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import Footer from "./components/Footer";
import GptSearch from "./components/GptSearch";
import NotFoundPage from "./components/Error";
import About from "./components/About";
import QRCodeFuction from "./components/QRCode";
import QRCodeComponent from "./components/QRCode";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/details/:movieId",
        element: <Detailed />,
      },
      {
        path: "/watch/:videoId",
        element: <WatchPage />,
      },
      {
        path: "/gptsearch",
        element: <GptSearch />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <QRCodeComponent />
        {/* <Header />
        <Outlet />
        <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
