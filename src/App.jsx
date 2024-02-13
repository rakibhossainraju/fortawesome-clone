import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";

const App = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
};
export default App;
