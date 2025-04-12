import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* This will render the page content */}
      <Footer />
    </div>
  );
};

export default Layout;
