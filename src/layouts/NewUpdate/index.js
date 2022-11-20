import { Col, Row } from "antd";
import BlogCard from "../../components/BlogCard";
import Section from "../../components/Section";

function NewUpdate() {
  return (
    <Section title="New Updates" subTitle="Latest News">
      <Row gutter={[30, 30]}>
        <Col xl={8} md={8} sm={24} xs={24}>
          <BlogCard />
        </Col>
        <Col xl={8} md={8} sm={24} xs={24}>
          <BlogCard />
        </Col>
        <Col xl={8} md={8} sm={24} xs={24}>
          <BlogCard />
        </Col>
      </Row>
    </Section>
  );
}

export default NewUpdate;
