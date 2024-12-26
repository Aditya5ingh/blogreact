import React, { useEffect, useState } from "react";
import "./home.css";
import Banner from "../components/Banner";
import { Link, Outlet } from "react-router-dom";
// import "../../tailwind.config";

const Home = ({ data }) => {
  return (
    <div>
      <Banner />
      <div className="card_list_section w-vw">
        <div className="container w-full">
          <div className="grid grid-cols-3 grid-row-1 p-6  justify-center content-center align-middle w-full gap-1">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 border border-black gap-0"
              >
                <img src="https://picsum.photos/id/1/200/200"></img>
                <h2 className="text-xl font-bold ">{item.name}</h2>
                <br></br>
                <p className="text-gray-600 ">{item.email}</p>
                <Link
                  to={{
                    pathname: `/blog/${item.id}`,
                    state: data,
                  }}
                >
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded float-right hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {/*    */}
          {/* <div className="content_area_blog">{data}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
