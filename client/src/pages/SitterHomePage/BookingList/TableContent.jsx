import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LuDot } from "react-icons/lu";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/authentication";
import { useNavigate } from "react-router-dom";

const RoundedTableContainer = styled(TableContainer)({
  borderRadius: "20px",
  overflow: "hidden",
  width: "1120px",
});

const getColorByStatus = (status) => {
  switch (status) {
    case "In service":
      return "#76d0fc";
    case "Waiting for confirm":
      return "#fa8ac0";
    case "Waiting for service":
      return "#ffca62";
    case "Success":
      return "#1ecd83";
    case "Canceled":
      return "#ea1110";
    default:
      return "black";
  }
};

const StyledTableCell = styled(TableCell)(({ theme, status }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "start",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    color: getColorByStatus(status),
    padding: "20px 16px",
    textAlign: "start",
    fontWeight: "500",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables({ searchbooking, setIsProfilePage }) {
  const [fetchData, setFetchData] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const { state, checkToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
  }, []);

  const fetchBookingHistory = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/bookings/sitterHomepage`
      );
      setFetchData(result.data);
      setBookingHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = () => {
    if (searchbooking) {
      const filterbooking = fetchData.filter((booking) => {
        return booking.owners.full_name
          .toLowerCase()
          .includes(searchbooking.toLowerCase());
      });
      console.log(filterbooking);
      setBookingHistory(filterbooking);
    } else {
      setBookingHistory(fetchData);
    }
  };

  useEffect(() => {
    searching();
  }, [searchbooking]);

  // 1. fetch
  useEffect(() => {
    fetchBookingHistory();
  }, []);

  console.log(fetchData);

  return (
    <RoundedTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pet Owner Name</StyledTableCell>
            <StyledTableCell align="right">Pet(s)</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Booked Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingHistory.map((row, index) => (
            <StyledTableRow
              key={index}
              css={css`
                cursor: pointer;
              `}
              onClick={() => {
                setIsProfilePage(true);
                navigate(
                  `/sitter/${state.user.id}/booking-list/profilePage/${fetchData[index].owners.id}`
                );
              }}
            >
              <StyledTableCell
                component="th"
                scope="row"
                css={css`
                  width: 240px;
                `}
              >
                {row.owners.full_name}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 120px;
                `}
              >
                {row.pets}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 120px;
                `}
              >
                {row.duration} hours
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 420px;
                `}
              >
                {row.booked_date}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                status={row.status}
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  width: 220px;
                `}
              >
                {row.status}
                <LuDot
                  css={css`
                    width: 40px;
                    height: 40px;
                  `}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </RoundedTableContainer>
  );
}

export default CustomizedTables;
