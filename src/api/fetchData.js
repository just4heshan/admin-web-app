import axios from "axios";
import { useState, useEffect } from "react";




const FetchData = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
            "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480"
          );
          setItems(response.data);
          console.log(response.data);
        };
        fetchData();
      }, []);
    return items
}

export default FetchData;



