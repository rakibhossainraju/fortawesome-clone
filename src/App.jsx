import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://rakibhossainraju.github.io/font-awesome-json/index-db.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "UPDATE_DATA", payload: data });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <NavBarComponent />
          <Outlet />
        </>
      )}
    </>
  );
};
export default App;
