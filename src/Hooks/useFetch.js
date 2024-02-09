import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://whatsaap-gtqe.onrender.com/api/v1/foods";

function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL);

        setData(res.data.foodsRecords);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return { data };
}

export default useFetch;
