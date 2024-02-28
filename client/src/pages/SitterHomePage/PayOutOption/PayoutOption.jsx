/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { LuWallet } from "react-icons/lu";
import { CiBitcoin } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";

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

function PayoutOption() {
  const [totalEarning, setTotalEarning] = useState(0);
  const [payoutData, setPayoutData] = useState([]);

  const getPayoutData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/sitters/booking/payoutOption`
      );

      setPayoutData(response.data.bookings);
      setTotalEarning(response.data.totalPrice);
      console.log(response);
      console.log(response.data);
      console.log(response.data.bookings);
      console.log(response.data.totalPrice);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = payoutData.slice(indexOfFirstRow, indexOfLastRow);

  const lastThreeDigits = (number) => {
    const bankNumbers = number.toString();
    const lastThreeDigits = bankNumbers.substring(7);
    return lastThreeDigits;
  };

  useEffect(() => {
    getPayoutData();
<<<<<<< HEAD
=======
    const total = payoutData.reduce((acc, booking) => acc + booking.price, 0);
    setTotalEarning(total);
>>>>>>> origin/feat/proflie-page
  }, []);

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
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <CiBitcoin size={26} />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                >
                  Total Earning:
                </Typography>
              </Stack>
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
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <LuWallet />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                >
                  Bank Account
                </Typography>
              </Stack>
              <Typography
                gutterBottom
                variant="subtitle1"
                fontWeight="bold"
                component="div"
              >
                {payoutData?.length > 0 && (
                  <Typography color={"#FF7037"}>
                    {payoutData[0].sitter_id.bank_name}*
                    {lastThreeDigits(payoutData[0].sitter_id.bank_numbers)}
                  </Typography>
                )}
              </Typography>
            </Stack>
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
                {currentRows.map((booking) => (
                  <StyledTableRow key={booking.id}>
                    <StyledTableCell component="th" scope="row">
                      {moment(booking.created_at).format("D MMM, YYYY")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {booking.owners?.full_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {booking.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography color={"#1CCD83"}>
                        {booking.price} THB.
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </RoundedTableContainer>
        </Stack>
        <Stack alignItems={"center"}>
          <Pagination
            count={Math.ceil(payoutData.length / rowsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
            sx={{
              "& .MuiPaginationItem-page": {
                color: "grey", // เปลี่ยนสีของตัวเลข
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                color: "#ff7037",
                backgroundColor: "#FFF1EC", // เปลี่ยนสีเมื่อเป็น active
              },
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}
export default PayoutOption;
