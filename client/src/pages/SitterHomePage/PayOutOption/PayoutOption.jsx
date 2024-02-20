/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBookingTools } from "../../../contexts/BookingTools";
import moment from "moment";

const RoundedTableContainer = styled(TableContainer)({
  borderRadius: "20px",
  overflow: "hidden",
  width: "96%",
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

function PayoutOption() {
  const param = useParams();
  const { getBookingData, bookedTimeData } = useBookingTools();
  const [totalEarning, setTotalEarning] = useState(0);

  useEffect(() => {
    getBookingData(param.id);
    const total = bookedTimeData.reduce(
      (acc, booking) => acc + booking.price,
      0
    );
    setTotalEarning(total);
    // console.log(bookedTimeData);
  }, [param.id, bookedTimeData]);

  return (
    <>
      <Stack padding={5} spacing={5}>
        <Stack className="part-1">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Payout Option
          </Typography>
        </Stack>
        <Stack
          className="part-2"
          direction={"row"}
          sx={{ justifyContent: "space-between" }}
        >
          <CardActionArea
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              boxShadow: 20,
              padding: 2,
              paddingLeft: 4,
              paddingRight: 4,
              marginRight: 8,
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                gutterBottom
                variant="subtitle1"
                fontWeight="bold"
                component="div"
              >
                Total Earning:
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                fontWeight="bold"
                component="div"
              >
                {totalEarning} THB.
              </Typography>
            </Stack>
          </CardActionArea>

          <CardActionArea
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              boxShadow: 20,
              padding: 2,
              paddingLeft: 4,
              paddingRight: 4,
              marginRight: 8,
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              fontWeight="bold"
              component="div"
            >
              Bank Account
            </Typography>
          </CardActionArea>
        </Stack>
        <Stack className="part-3">
          <RoundedTableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell align="right">From</StyledTableCell>
                  <StyledTableCell align="right">
                    Transaction No.
                  </StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookedTimeData &&
                  bookedTimeData.map((booking, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {moment(booking.created_at).format("d MMM, YYYY")}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {booking.owners?.full_name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {booking.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {booking.price} Baht.
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </RoundedTableContainer>
        </Stack>
      </Stack>
    </>
  );
}
export default PayoutOption;
