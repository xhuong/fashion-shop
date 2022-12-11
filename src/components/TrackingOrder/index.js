import React from "react";
import { useGetListProductsOrderedQuery } from "../../services/ProductAPI";
import { formatPrice, totalPriceOfTrackingOrder } from "../../Utils/Commons";
import Button from "../Button";
import Message from "../Message";
import "./index.scss";

const TrackingOrder = () => {
  const { data, isError, isSuccess } = useGetListProductsOrderedQuery();
  return (
    <React.Fragment>
      {isError ? (
        <Message className="danger text-center">Sorry, we have some error when loading your data.</Message>
      ) : data?.length <= 0 ? (
        <Message className="infor text-center">You dont have product ordered yet.</Message>
      ) : (
        <div className="track_order">
          <div className="track_order_header">
            <div className="track_order_number_area">
              <span className="track_order_title">My Order</span>
              <span className="track_order_number">#15</span>
            </div>
            <Button type="secondary" size="sm-btn">
              Checkout
            </Button>
          </div>
          <ul className="track_order_list">
            {data?.length > 0 &&
              data.map((dataItem, index) => (
                <li className="track_order_item" key={index}>
                  <div className="track_order_item_infor">
                    <div className="track_order_item_left">
                      <div className="track_order_item--img-wrapper">
                        <img src={require(`../../assests/images/products/${dataItem.productImages}`)} alt="" />
                      </div>
                      <div className="track_order_item_content">
                        <h4 className="track_order_item_title">{dataItem.nameOfProduct}</h4>
                        <p className="track_order_item_size">
                          Size: {dataItem.size} x{dataItem.quantityOrdered}, Color: {dataItem.color}
                        </p>
                        <span className="track_order_item_price">{formatPrice(dataItem.priceOfProduct)} VNĐ</span>
                      </div>
                    </div>

                    <div className="track_order_item_status">
                      <p>Status</p>
                      <p className="text-inprogress py-1 px-3 rounded-sm capitalize">
                        {dataItem.status === 0 ? "In progress" : "Completed"}
                      </p>
                    </div>

                    <div className="track_order_item_status">
                      <p>Subtotal: </p>
                      <p className="py-1 px-3 font-semibold">
                        {formatPrice(dataItem.quantityOrdered * dataItem.priceOfProduct)} VNĐ
                      </p>
                    </div>

                    <div className="track_order_item_expected_date">
                      <p>Date ordered:</p>
                      <span>{dataItem.orderDate.slice(0, 19).replace("T", " ")}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className="track_order_total text-right flex items-center justify-between">
            <span className="italic font-thin text-lg">Paid using COD method</span>
            <span className="font-semibold">Total: {formatPrice(totalPriceOfTrackingOrder(data))} VNĐ</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TrackingOrder;

{
  /* <Message className="message warning">Your cart is empty. Let's go shop.</Message> */
}
