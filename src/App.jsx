import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import Banner from "./components/Banner.jsx";
import Home from "./pages/home.jsx";
import Blog from "./pages/Blog.jsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: "0", name: "Adi", address: "Heelo" },
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      let responseJson = await response.json();

      setData(responseJson);
    };
    getData();
  }, []);

  // Custom hook to handle default redirection
  const DefaultRedirect = () => {
    const navigate = useNavigate();
    console.log(navigate);
    useEffect(() => {
      navigate("/blog");
    }, [navigate]);

    return null; // This component doesn't render anything
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultRedirect />} />
          <Route path="/blog" element={<Home data={data} />} />
          <Route path="blog/:id" element={<Blog data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
