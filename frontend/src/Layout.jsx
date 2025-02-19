import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Layout() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}