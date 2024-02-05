import * as React from "react";
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
    fontSize: 14,
    color: getColorByStatus(status),
    padding: 30,
    textAlign: "start",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables() {
  const param = useParams();
  const [bookingHistory, setBookingHistory] = useState([]);

  const fetchBookingHistory = async () => {
    try {
      console.log(param.id);
      const result = await axios.get(
        `http://localhost:4000/bookings/${param.id}`
      );

      setBookingHistory(result.data);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookingHistory();
  }, []);

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
          {bookingHistory.map((row) => (
            <StyledTableRow key={row.owners.full_name}>
              <StyledTableCell component="th" scope="row">
                {row.owners.full_name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.pets}</StyledTableCell>
              <StyledTableCell align="right">
                {row.duration} hours
              </StyledTableCell>
              <StyledTableCell align="right">{row.booked_date}</StyledTableCell>
              <StyledTableCell align="right" status={row.status}>
                ● {row.status}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </RoundedTableContainer>
  );
}

export default CustomizedTables;
