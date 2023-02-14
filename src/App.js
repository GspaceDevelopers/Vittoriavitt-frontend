import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteApp from "./services/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Contexts/auth";
import { Provider } from "react-redux";
import Store from "./Store";

function App() {

  return (
    <div className="App">
      <Provider store={Store}>
        <AuthProvider>
          <BrowserRouter>
            <ToastContainer autoClose={2000} position="top-center"></ToastContainer>
            <RouteApp></RouteApp>
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;


