import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Toast  from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        {children}
        <Toast />
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Azizul - eCommerce : Everything you can buy",
  description: "Azizul Hakim",
  author: "Azizul Hakim",
  kywords: "HTML, CSS, BOOTSTRAPS, REACT,",
};

export default Layout;
