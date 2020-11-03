import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return <Layout>
    <LandingPage/>
  </Layout>;
}

export default App;
