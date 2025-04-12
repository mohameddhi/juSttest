import Layout from "../src/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";



function MyApp({ Component, pageProps, router }) {
  // Check if the current page is the login page
  const isLoginPage = router.pathname === "/login";

  return isLoginPage ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
