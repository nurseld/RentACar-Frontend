import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import BlogList from "../../components/BlogList/BlogList";
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation("global")
  return (
    <Helmet title="Blogs">
      <CommonSection title={t("blog.Title")} />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
