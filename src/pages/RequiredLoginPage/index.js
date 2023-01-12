import React from "react";
import ContainerComponent from "../../components/ContainerComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Notify from "../../layouts/Notify";

const RequiredLoginPage = () => {
  const notifyContent = {
    title: "You are not logged in.",
    message: "You are accessing a page that required login to see it. Please login before you can see this page.",
  };

  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <Notify {...notifyContent} />
      </ContainerComponent>
      <Footer />
    </React.Fragment>
  );
};

export default RequiredLoginPage;
