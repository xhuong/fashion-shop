import { Link } from "react-router-dom";
import "./index.scss";

function BlogCard() {
  return (
    <div className="card">
      <div className="card_img_wrapper rounded-md overflow-hidden">
        <img src={require("../../assests/images/blogs/01.png")} alt="" />
      </div>
      <div className="card_description">
        <span className="card_time">26 Jan 2022</span>
        <h3 className="card_title">
          Let's start bring sale on this saummer vacation.
        </h3>
        <p className="card_subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quis architecto velit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia, sed? Necessitatibus, labore.
        </p>
        <Link className="card_continue_reading" to="">
          Continue reading...
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
