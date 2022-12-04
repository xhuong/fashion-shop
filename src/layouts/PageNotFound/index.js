import { Col, Row } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./index.scss";

const PageNotFound = () => {
  const location = useNavigate();
  return (
    <div className="page_not_found">
      <div className="container">
        <Row className="justify-center">
          <Col xl={12}>
            <div className="text-center">
              <div className="inline-block p-8 bg-red-100 text-red-500 rounded-full">
                <CiFaceSmile />
              </div>
              <h2 className="font-semibold text-5xl my-6">404. Page not found.</h2>
              <p className="font-normal">
                Sorry, we couldn't find the page you where looking for. We suggest that
                you return to home page.
              </p>
              <Button
                type="secondary"
                size="sm-btn"
                className="ml-auto mr-auto mt-8"
                onClick={() => location("/")}
              >
                Back to home <AiOutlineHome />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PageNotFound;
