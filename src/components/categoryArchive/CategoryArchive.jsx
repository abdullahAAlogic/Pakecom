import React from "react";
import InnerBanner from "../innerBanner/InnerBanner";
import { useParams } from "react-router-dom";
import UseFetch from "../hooks/useFetch/UseFetch";
import Layout from "../layout/Layout";

const CategoryArchive = () => {
  const { id } = useParams();
  const { isLoading, serverError, apiData } = UseFetch(
    "GET",
    `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`,
    {}
  );

  console.log("category",apiData)
  console.log("category TITLE",apiData[0]?.category?.name)
  return (
    <Layout>
      <InnerBanner title={apiData[0]?.category?.name} />
      
    </Layout>
  );
};

export default CategoryArchive;
