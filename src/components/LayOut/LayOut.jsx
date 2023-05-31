import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import css from "./LayOut.module.css";
import Loader from "../Loader/Loader";

const LayOut = () => {
  return (
    <div className={css.LayOut}>
      <Header />
      <div className={css.container}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;
