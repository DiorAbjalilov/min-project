import axios from "axios";
const ApiController = async (type, api, data) => {
  let ResData = null;
  try {
    if (type === "post") {
      const res = await axios.post(api, data);
      ResData = await res.data;
    }
    if (type === "get") {
      const res = await axios.get(api, data);
      ResData = await res.data;
    }
  } catch (err) {
    console.log(err);
  }
  return {
    data: ResData,
  };
};

export default ApiController;
