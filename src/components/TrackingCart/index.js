import React, { useEffect } from "react";
import { useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllProductsFromCart } from "../../redux/slices/cartSlice";
import { useAddNewOrderMutation, useLazyGetNewestOrderQuery } from "../../services/OrderAPI";
import { useAddNewOrderDetailsMutation } from "../../services/OrderDetailsAPI";
import { formatPrice, totalPrice } from "../../Utils/Commons";
import Button from "../Button";
import Message from "../Message";
import "./index.scss";

const TrackingCart = ({ cartData }) => {
  const navigate = useNavigate();
  const [countDownTimer, setCountDownTimer] = useState(5);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const listProductInCart = useSelector((state) => state.cart.cart);
  const [isTriggerGetNewestOrder, setIsTriggerGetNewestOrder] = useState(false);
  const [addNewOrder, { data: addNewOrderData, isLoading, isSuccess }] = useAddNewOrderMutation();
  const [getNewestOrder, { data: newestOrderData, isSuccess: isSuccessGetNewestOrder }] = useLazyGetNewestOrderQuery(
    {}
  );
  const [
    addDataToOrderDetailsTable,
    {
      data: addOrderDetailsData,
      isSuccess: isSuccessAddDataToOrderDetailsTable,
      isError: isErrorAddDataToOrderDetailsTable,
    },
  ] = useAddNewOrderDetailsMutation({});
  const dispatch = useDispatch();

  const handleCheckout = () => {
    const orderDate = new Date().toISOString().slice(0, 19).replace("T", " ");
    const status = 0;
    const idUser = 1;
    addNewOrder({ orderDate, status, idUser });
  };

  const addDataToOrderDetails = (idNewestOrder) => {
    listProductInCart.forEach(async (cartItem) => {
      const dataToAdd = {
        idOrder: idNewestOrder,
        idProduct: cartItem.id,
        quantityOrdered: cartItem.count,
        unitPrice: cartItem.count * cartItem.priceOfProduct,
      };
      await addDataToOrderDetailsTable(dataToAdd);
    });
  };

  useEffect(() => {
    if (addNewOrderData?.err === false && isSuccess) {
      // when add new order success
      setIsTriggerGetNewestOrder(true);
    }
  }, [addNewOrderData]);

  useEffect(() => {
    if (isTriggerGetNewestOrder === true) {
      getNewestOrder();
    }
  }, [isTriggerGetNewestOrder]);

  useEffect(() => {
    if (newestOrderData?.length > 0 && isSuccessGetNewestOrder === true) {
      const { id: idNewestOrder } = newestOrderData[0];
      // so lan them product detail se la so luong mat hang trong gio hang (khong tinh mat hang giong nhau)
      if (listProductInCart.length > 0) {
        addDataToOrderDetails(idNewestOrder);
      }
    }
  }, [newestOrderData]);

  useEffect(() => {
    if (addOrderDetailsData && isSuccessAddDataToOrderDetailsTable === true) {
      // when add data to order success, clear all cart
      // show message checkout success in 5s
      // navigate to follow order page
      dispatch(removeAllProductsFromCart());
      setIsOrderSuccess(true);
    }
  }, [addOrderDetailsData]);

  useEffect(() => {
    let timer;
    if (isOrderSuccess === true) {
      timer = setInterval(() => {
        setCountDownTimer(countDownTimer - 1);
      }, 1000);

      if (countDownTimer === 0) {
        navigate("/");
        clearInterval(timer);
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [isOrderSuccess, countDownTimer]);

  return (
    <React.Fragment>
      {cartData.length > 0 ? (
        <div className="track_cart">
          <div className="track_cart_header">
            <div className="track_cart_number_area">
              <span className="track_cart_title">Cart</span>
              <span className="track_cart_number">#15</span>
            </div>
            <Button type="secondary" size="sm-btn" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
          <ul className="track_cart_list">
            {cartData.map((cartItem, index) => (
              <li className="track_cart_item" key={index}>
                <div className="track_cart_item_infor">
                  <div className="track_cart_item_left">
                    <div className="track_cart_item--img-wrapper">
                      <img src={require(`../../assests/images/products/${cartItem.productImages}`)} alt="" />
                    </div>
                    <div className="track_cart_item_content">
                      <h4 className="track_cart_item_title">{cartItem.nameOfProduct}</h4>
                      <p className="track_cart_item_size">
                        Size: {cartItem.size} x{cartItem.count}, Color: {cartItem.color}
                      </p>
                      <span className="track_cart_item_price">{formatPrice(cartItem.priceOfProduct)} VNĐ</span>
                    </div>
                  </div>

                  {/* <div className="track_cart_item_status">
                <p>Status</p>
                <p className="text-inprogress py-1 px-3 rounded-sm capitalize">In Progress</p>
              </div> */}

                  <div className="track_cart_item_status">
                    <p>Subtotal: </p>
                    <p className="py-1 px-3 font-semibold">
                      {formatPrice(cartItem.priceOfProduct * cartItem.count)} VNĐ
                    </p>
                  </div>

                  <div className="track_cart_item_expected_date">
                    <p>Expected date by:</p>
                    <span>22 November 2022</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="track_cart_total text-right flex items-center justify-between">
            <Button
              type="secondary"
              size="sm-btn"
              onClick={() => {
                dispatch(removeAllProductsFromCart());
              }}
            >
              <MdOutlineRemoveShoppingCart /> Clear cart
            </Button>
            <span className="font-semibold">Total: {formatPrice(totalPrice(cartData))} VNĐ</span>
          </div>
        </div>
      ) : isOrderSuccess ? (
        <Message className="message success">
          Order success. Redirecting to order tracking page after {countDownTimer} seconds.
        </Message>
      ) : (
        <Message className="message warning">Your cart is empty. Let's go shop.</Message>
      )}
    </React.Fragment>
  );
};

export default TrackingCart;
