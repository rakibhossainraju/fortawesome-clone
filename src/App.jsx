import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadingSpinner } from "./components/LoadingSpinner.jsx";
import { addData } from "./store/app-data/app-data.action.js";
const App = () => {
  const [dataIsLoaded, setDataIsLoadded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://rakibhossainraju.github.io/font-awesome-json/index-db.json")
      .then((res) => res.json())
      .then((data) => {
        setDataIsLoadded(true);
        dispatch(addData(data));
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
        <div className="flex-center h-[90vh] w-[100vw]">
          <LoadingSpinner />
        </div>
      ) : (
        dataIsLoaded && (
          <>
            <NavBarComponent />
            <Outlet />
          </>
        )
      )}
    </>
  );
};
export default App;
