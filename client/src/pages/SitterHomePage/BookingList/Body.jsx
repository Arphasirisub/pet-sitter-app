/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CustomizedTables from "./TableContent";
import { useState, useEffect } from "react";
import axios from "axios";

const bodyStyle = css`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 40px 0px 80px 0px;
  flex-direction: column;
  align-items: flex-start;
  background: var(--gray-100, #f6f6f9);
  gap: 24px;
`;

const topicStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  padding-left: 40px;
`;

const inputStyle = css`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  width: 170px;
  color: rgba(123, 126, 143, 1);
  background-color: rgba(255, 255, 255, 1);
`;

const fontStyle = css`
  color: rgba(42, 46, 63, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const topicInputStyle = css`
  display: flex;
  gap: 15px;
`;

const Body = ({ setIsProfilePage }) => {
  const [booked, setbooked] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [fillterStatus, setFillterStatus] = useState("");

  const fetchBookingHistory = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/bookings/sitterHomepage`
      );
      console.log(result);
      setFetchData(result.data);
      setBookingHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = () => {
    let filterbooking = fetchData;

    try {
      if (booked) {
        filterbooking = filterbooking.filter((booking) => {
          return booking.owners.full_name
            .toLowerCase()
            .includes(booked.toLowerCase());
        });
      }

      if (fillterStatus) {
        filterbooking = filterbooking.filter(
          (booking) =>
            booking.status.toLowerCase() === fillterStatus.toLowerCase()
        );
      }

      console.log(filterbooking);
      setBookingHistory(filterbooking);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searching();
  }, [booked, fillterStatus]);

  useEffect(() => {
    fetchBookingHistory();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookingHistory.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container_body" css={bodyStyle}>
      <div className="section_topic" css={topicStyle}>
        <h3 css={fontStyle}>Booking List</h3>
        <div className="topic_input" css={topicInputStyle}>
          <input
            type="text"
            placeholder="Search..."
            css={inputStyle}
            onChange={(event) => setbooked(event.target.value)}
            value={booked}
          />
          <select
            className="dropdown"
            css={inputStyle}
            onChange={(event) => setFillterStatus(event.target.value)}
            value={fillterStatus}
          >
            <option value="">All status</option>
            <option value="Success">Success</option>
            <option value="In service">In service</option>
            <option value="Waiting for service">Waiting for service</option>
            <option value="Waiting for confirm">Waiting for confirm</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
      </div>
      <div
        className="section_table"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 40px;
        `}
      >
        <CustomizedTables
          booked={booked}
          setIsProfilePage={setIsProfilePage}
          fetchData={fetchData}
          setFetchData={setFetchData}
          bookingHistory={bookingHistory}
          setBookingHistory={setBookingHistory}
          fetchBookingHistory={fetchBookingHistory}
          searching={searching}
          currentItems={currentItems}
          fillterStatus={fillterStatus}
        />
      </div>
      {/* Pagination */}
      <ul
        className="pagination"
        css={css`
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin-top: 20px; /* Adjust as needed */
        `}
      >
        {Array.from({
          length: Math.ceil(bookingHistory.length / itemsPerPage),
        }).map((_, index) => (
          <li
            key={index}
            className="page-item"
            css={css`
              margin: 0 5px;
            `}
          >
            <button
              className="page-link"
              onClick={() => paginate(index + 1)}
              css={css`
                padding: 5px 10px; /* Adjust padding for the pagination buttons */
                border: 1px solid #ccc;
                background-color: #fff;
                color: #333;
                cursor: pointer;
                transition: background-color 0.3s ease;

                /* Focus styles */
                &:focus {
                  outline: none;
                  border-color: #007bff;
                  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                }
              `}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
