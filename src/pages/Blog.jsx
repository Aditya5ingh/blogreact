import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Banner from "../components/Banner";

const Blog = () => {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  // const memo=useMemo();
  const ram = useParams();
  //   const data = props.state;
  const [data, setData] = useState([
    { id: "0", name: "Adi", address: "Heelo" },
  ]);
  // const ram = memo(param);

  useEffect(() => {
    setLoad(false);
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      let responseJson = await response.json();

      setData(responseJson);
    };
    // setData();
    getData();
  }, []);
  // function findId(data, idToLookFor) {
  //   var categoryArray = data;
  //   for (var i = 0; i < categoryArray.length; i++) {
  //     if (categoryArray[i].id == idToLookFor) {
  //       return categoryArray[i];
  //     }
  //   }
  // }
  const findId = (data, idToLookFor) =>
    data.find((item) => item.id === Number(idToLookFor));
  const datadetails = findId(data, ram.id);
  console.log(datadetails);
  console.log(load);
  // useEffect(() => {
  //   // Process the parameter and update the URL if needed
  //   const newParam = findName;

  //   if (newParam !== ram) {
  //     navigate(`/blog/${newParam}`, { replace: true }); // Update the URL without adding to history
  //   }
  // }, [param, navigate]);

  return (
    <div>
      <Banner />
      {load ? (
        <div>Loading.....</div>
      ) : datadetails ? (
        <div>
          <div className="container">
            <div className="content-section flex justify-around">
              <img
                src="https://picsum.photos/id/1/200/200"
                className="w-1/3"
              ></img>
              <div className="details w-1/3 flex flex-col justify-center">
                <h2 className="text-xl font-bold ">{datadetails.name}</h2>
                <br></br>
                <p className="text-gray-600 ">{datadetails.email}</p>
                <p className="text-gray-600 ">{datadetails.username}</p>
                <p className="text-gray-600 ">{datadetails.website}</p>
                <p className="text-gray-600 ">{datadetails.company.name}</p>
              </div>
            </div>
            <div className="blog">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              incidunt cum, quasi non tempore minima asperiores obcaecati
              adipisci laboriosam saepe soluta! Error, suscipit provident. Ex
              corrupti quidem aperiam veritatis velit. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nulla incidunt cum, quasi non
              tempore minima asperiores obcaecati adipisci laboriosam saepe
              soluta! Error, suscipit provident. Ex corrupti quidem aperiam
              veritatis velit. v Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nulla incidunt cum, quasi non tempore minima
              asperiores obcaecati adipisci laboriosam saepe soluta! Error,
              suscipit provident. Ex corrupti quidem aperiam veritatis velit.
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Blog;
