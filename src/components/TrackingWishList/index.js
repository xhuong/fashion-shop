import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductsFromWishList } from "../../redux/slices/cartSlice";
import { formatPrice } from "../../Utils/Commons";
import Button from "../Button";
import Message from "../Message";
import "./index.scss";

const TrackingWishList = () => {
  const listProductInWishList = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {listProductInWishList.length > 0 ? (
        <div className="track_wishlist">
          <div className="track_wishlist_header">
            <div className="track_wishlist_number_area">
              <span className="track_wishlist_title">My wish list</span>
              <span className="track_wishlist_number">#15</span>
            </div>
          </div>
          <ul className="track_wishlist_list">
            {listProductInWishList?.length > 0 &&
              listProductInWishList.map((dataItem, index) => (
                <li className="track_wishlist_item" key={index}>
                  <div className="track_wishlist_item_infor">
                    <div className="track_wishlist_item_left">
                      <div className="track_wishlist_item--img-wrapper">
                        <img src={require(`../../assests/images/products/${dataItem.productImages}`)} alt="" />
                      </div>
                      <div className="track_wishlist_item_content">
                        <h4 className="track_wishlist_item_title">{dataItem.nameOfProduct}</h4>
                        <p className="track_wishlist_item_size">
                          Size: {dataItem.size} x{dataItem.count}, Color: {dataItem.color}
                        </p>
                        <span className="track_wishlist_item_price">{formatPrice(dataItem.priceOfProduct)} VNĐ</span>
                      </div>
                    </div>

                    <div className="track_wishlist_item_status">
                      <p>Subtotal: </p>
                      <p className="py-1 px-3 font-semibold">
                        {formatPrice(dataItem.count * dataItem.priceOfProduct)} VNĐ
                      </p>
                    </div>

                    <div className="track_order_item_expected_date">
                      <Button
                        type="primary"
                        size="btn-sm"
                        onClick={() => {
                          dispatch(removeProductsFromWishList(dataItem.id));
                        }}
                      >
                        x
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className="track_wishlist_total text-right flex items-center justify-between">
            <span className="italic font-thin text-lg">Paid using COD method</span>
          </div>
        </div>
      ) : (
        <Message className="infor text-center">Your wish list is empty !</Message>
      )}
    </React.Fragment>
  );
};

export default TrackingWishList;
