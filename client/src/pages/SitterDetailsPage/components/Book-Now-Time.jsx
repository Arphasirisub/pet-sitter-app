import { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography } from "@mui/material";

const TestBookTimeData = () => {
  const [sitterData1, setSitterData1] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/bookings/ea1e0e79-26fe-4dcf-98a6-041a8d8354cc`
      );
      setSitterData1(response.data);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    const timestamp = parsedDate.getTime(); // Include .getTime() to get the timestamp
    return parsedDate + " (" + timestamp + ")";
  };

  return (
    <>
      <Stack>
        {sitterData1?.map((man, index) => (
          <Stack key={index}>
            <Typography>{formatDate(man.booked_start)}</Typography>
            <Typography>{formatDate(man.booked_stop)}</Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default TestBookTimeData;
