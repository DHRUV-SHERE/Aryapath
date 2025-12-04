import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar_Common";
import Footer from "../components/common/Footer_Common";
import PageTransitionLoader from "../components/PageTransitionLoader";

const LayoutCommon = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <PageTransitionLoader>
            <Outlet />
          </PageTransitionLoader>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutCommon;
