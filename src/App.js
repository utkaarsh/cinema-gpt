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

const RedirectToGoogleDrive = () => {
  window.location.replace(
    "https://drive.google.com/file/d/1Dwy3Tt6-axrqSXbna_4_oPaYnuHql0ES/view"
  );
  return null;
};

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
        path: "/gdrive",
        element: <RedirectToGoogleDrive />,
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
