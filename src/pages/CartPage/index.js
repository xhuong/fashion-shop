import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ContainerComponent from "../../components/ContainerComponent";
import BreadCrumb from "../../components/Breadcrumb";
import { useSelector } from "react-redux";
import Cart from "../../layouts/Cart";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <Cart cartData={cartData} />
      <Footer />
    </React.Fragment>
  );
};

export default CartPage;
