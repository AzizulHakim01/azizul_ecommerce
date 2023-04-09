import React from "react";
import Layout from "../../component/Layout/Layout";
import AdminMenu from "./../../component/Layout/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout
      title={"Create Product - Azizul eCommerce App"}
      style={{ height: "80vh" }}
    >
      <h1 className="text-center">Admin Dashboard</h1>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
      <h1>Create Product</h1>
    </Layout>
  );
};

export default CreateProduct;
