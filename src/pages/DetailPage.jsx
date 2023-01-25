import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Details from "../components/Details";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const paramID = useParams();
  const id = paramID?.id;
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/data");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {data && <Details ID={id} data={data} />}
      <Footer />
    </>
  );
};

export default DetailPage;
