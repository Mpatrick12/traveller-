import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
const Shop = () => {
  return (
    <Layout title="" description="" className="">
      <div className="container-fluid bg-success w-100 shadow">
        <div className="row p-2"></div>
      </div>
      <div className="container-fluid mb-2 p-1 shadow">
        <h1 className="h1 text-center my-3 p-2 font-weight-bold">
          <span style={{ color: "orange" }}>Incre</span>
          <span style={{ color: "#e8e8e8" }}>dible</span>
          <span style={{ color: "green" }}> Rwanda!</span>
        </h1>
        <p className="text-justify mx-2">
          Travel to the 27 vibrant districts in the multilingual, multicultural
          and pluralistic Union of Rwanda. Each of the Rwandan districts has
          something exclusive to offer to wide-eyed tourists who flock
          throughout the year. Rwanda is a major travel and tourist destination
          because of its rich and versatile travel experience in terms of
          recreational and adventure activities, historic and modern tourist
          sites, cultural and spiritual insight. Travel to Rwanda is like
          exploring its treasure trove. The priceless monuments like the Taj
          Mahal and the Imambara attract tourists to Rwanda besides revealing
          its rich architectural and cultural heritage.{" "}
        </p>
      </div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-2 col-sm-12 border-right shadow">
            <h5 className="h5 font-weight-bold text-warning text-center my-3 border-bottom">
              Filter by price range
            </h5>
          </div>
          <div className="col-md-10 col-sm-12">
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
