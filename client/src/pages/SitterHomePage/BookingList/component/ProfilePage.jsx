/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { display } from "@mui/system";
import Rating from "@mui/material/Rating";
import {
  contentStyle,
  popUpDetaiPetlStyle,
  popUpDetailStyle,
} from "./ProfilePageStyle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxDotFilled } from "react-icons/rx";

function ProfilePage({ setIsProfilePage }) {
  const navigate = useNavigate();
  const { state, checkToken } = useAuth();
  const params = useParams();
  const [bookingById, setBookingByid] = useState();
  const [open, setOpen] = useState(false);
  const [openPetDetail, setOpenPetDetail] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [petById, setPetById] = useState();
  const [petDetail, setPetDetail] = useState([]);
  const [openRating, setOpenRating] = useState(false);
  const [rating, setRating] = useState(5);

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

  const getWidthByStatus = (status) => {
    switch (status) {
      case "In service":
        return "120px";
      case "Waiting for confirm":
        return "175px";
      case "Waiting for service":
        return "122px";
      case "Success":
        return "120px";
      default:
        return "black";
    }
  };

  const getTextByStatus = (status) => {
    switch (status) {
      case "In service":
        return "Success";
      case "Waiting for confirm":
        return "Confirm Booking";
      case "Waiting for service":
        return "In Service";
      case "Success":
        return "Review";
      default:
        return "black";
    }
  };

  const getPetById = async (petId) => {
    const results = await axios.get(
      `http://localhost:4000/pets/getpet/${petId}`
    );
    setPetDetail(results.data.data);
  };

  const getOwnerAndPetById = async () => {
    const result = await axios.get(
      `http://localhost:4000/bookings/sitter/${params.id}`
    );

    setBookingByid(result.data);
    setPetById(result.data.pet_bookings);
  };

  const updateStatus = async (statusChange) => {
    const result = await axios.put(
      `http://localhost:4000/bookings/${params.id}`,
      { status: statusChange }
    );
    getOwnerAndPetById(params.id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosePetDetail = () => {
    setOpenPetDetail(false);
  };
  const handleCloseReject = () => {
    setOpenReject(false);
  };
  const handleCloseRating = () => {
    setOpenRating(false);
  };

  useEffect(() => {
    checkToken();
    getOwnerAndPetById();
  }, []);
  return (
    <div
      className="container_profilepage"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 40px 40px 40px;
        height: 1024px;
        gap: 24px;
        background-color: rgba(246, 246, 249, 1);
      `}
    >
      {bookingById && (
        <Modal
          onClose={handleClose}
          open={open}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "800px",
              background: "white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0 40px ",
            }}
          >
            <div
              className="popup_petownertop"
              css={css`
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 0px 40px;
                border-bottom: 1px solid rgba(220, 223, 237, 1);
              `}
            >
              <h2>{bookingById.owners.full_name}</h2>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                css={css`
                  cursor: pointer;
                `}
              >
                <IoClose
                  css={css`
                    width: 30px;
                    height: 30px;
                    color: rgba(123, 126, 143, 1);
                    margin-top: 5px;
                  `}
                />
              </button>
            </div>
            <div
              className="popup_petownerdetail"
              css={css`
                display: flex;
                justify-content: space-between;
                width: 800px;
                padding: 40px;
              `}
            >
              <div className="profile_img">
                <img
                  src={bookingById.owners.profile_img}
                  alt="profileimg"
                  css={css`
                    width: 240px;
                    height: 240px;
                    border-radius: 999px;
                    object-fit: cover;
                  `}
                />
              </div>

              <div
                className="profile_detail"
                css={css`
                  width: 440px;
                  padding: 24px;
                  background-color: rgba(250, 250, 251, 1);
                  display: flex;
                  flex-direction: column;
                  gap: 40px;
                `}
              >
                <div className="detail_name" css={popUpDetailStyle}>
                  <h4
                    css={css`
                      font-size: 20px;
                      font-weight: 700;
                      color: rgba(174, 177, 195, 1);
                      margin: 0;
                    `}
                  >
                    Pet Owner Name
                  </h4>
                  <p
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      margin: 0;
                    `}
                  >
                    {bookingById.owners.full_name}
                  </p>
                </div>
                <div className="detail_email" css={popUpDetailStyle}>
                  <h4
                    css={css`
                      font-size: 20px;
                      font-weight: 700;
                      color: rgba(174, 177, 195, 1);
                      margin: 0;
                    `}
                  >
                    Email
                  </h4>
                  <p
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      margin: 0;
                    `}
                  >
                    {bookingById.owners.email}
                  </p>
                </div>
                <div className="detail_phone" css={popUpDetailStyle}>
                  <h4
                    css={css`
                      font-size: 20px;
                      font-weight: 700;
                      color: rgba(174, 177, 195, 1);
                      margin: 0;
                    `}
                  >
                    Phone
                  </h4>
                  <p
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      margin: 0;
                    `}
                  >
                    {bookingById.owners.phone}
                  </p>
                </div>
                <div className="detail_id" css={popUpDetailStyle}>
                  <h4
                    css={css`
                      font-size: 20px;
                      font-weight: 700;
                      color: rgba(174, 177, 195, 1);
                      margin: 0;
                    `}
                  >
                    ID Number
                  </h4>
                  <p
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      margin: 0;
                    `}
                  >
                    {bookingById.owners.id}
                  </p>
                </div>
                <div className="detail_birth" css={popUpDetailStyle}>
                  <h4
                    css={css`
                      font-size: 20px;
                      font-weight: 700;
                      color: rgba(174, 177, 195, 1);
                      margin: 0;
                    `}
                  >
                    Date of Birth
                  </h4>
                  <p
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      margin: 0;
                    `}
                  >
                    {bookingById.owners.birthday}
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      {bookingById && (
        <Modal
          onClose={handleClosePetDetail}
          open={openPetDetail}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "800px",

              background: "white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0 40px ",
            }}
          >
            <div
              className="popup_petownertop"
              css={css`
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 0px 40px;
                border-bottom: 1px solid rgba(220, 223, 237, 1);
              `}
            >
              <h2>{petDetail.pet_name}</h2>
              <button
                onClick={() => {
                  setOpenPetDetail(false);
                }}
                css={css`
                  cursor: pointer;
                `}
              >
                <IoClose
                  css={css`
                    width: 30px;
                    height: 30px;
                    color: rgba(123, 126, 143, 1);
                    margin-top: 5px;
                  `}
                />
              </button>
            </div>
            <div
              className="popup_petownerdetail"
              css={css`
                display: flex;
                justify-content: space-between;
                width: 800px;
                padding: 40px;
              `}
            >
              <div
                className="profile_img"
                css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                `}
              >
                <img
                  src={petDetail.picture}
                  alt="profileimg"
                  css={css`
                    width: 240px;
                    height: 240px;
                    border-radius: 999px;
                    object-fit: cover;
                  `}
                />
                <h4
                  css={css`
                    font-size: 20px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                    margin: 0;
                    text-align: center;
                  `}
                >
                  {petDetail.pet_name}
                </h4>
              </div>

              <div
                className="profile_detail"
                css={css`
                  width: 440px;
                  height: 408px;
                  padding: 24px;
                  background-color: rgba(250, 250, 251, 1);
                  display: flex;
                  justify-content: space-between;
                  gap: 40px;
                `}
              >
                <div
                  className="detail_groupleft"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    gap: 65px;
                  `}
                >
                  <div className="detail_pettype" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Pet Type
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.pet_name}
                    </p>
                  </div>
                  <div className="detail_sex" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Sex
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.sex}
                    </p>
                  </div>
                  <div className="detail_color" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Color
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.color}
                    </p>
                  </div>
                  <div className="detail_about" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      About
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.about ? petDetail.about : "-"}
                    </p>
                  </div>
                </div>

                <div
                  className="detail_groupright"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    gap: 65px;
                  `}
                >
                  <div className="detail_breed" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Breed
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.breed}
                    </p>
                  </div>
                  <div className="detail_age" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Age
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.age}
                    </p>
                  </div>
                  <div className="detail_weight" css={popUpDetaiPetlStyle}>
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        color: rgba(174, 177, 195, 1);
                        margin: 0;
                      `}
                    >
                      Weight
                    </h4>
                    <p
                      css={css`
                        font-size: 16px;
                        font-weight: 500;
                        margin: 0;
                      `}
                    >
                      {petDetail.weight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      <Modal
        open={openReject}
        onClose={handleCloseReject}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "208px",
            background: "white",
            borderRadius: "16px",
          }}
        >
          {/* <h2
            css={css`
              padding: 0px 24px 16px 24px;
              border-bottom: 1px solid rgba(228, 230, 237, 1);
            `}
          >
            Delete Confirmation
          </h2> */}
          <div
            className=""
            css={css`
              display: flex;

              justify-content: space-between;
              align-items: center;
              padding: 0px 16px;
              border-bottom: 1px solid rgba(220, 223, 237, 1);
            `}
          >
            <h2>Reject Confirmation</h2>
            <button
              onClick={handleCloseReject}
              css={css`
                cursor: pointer;
              `}
            >
              <IoClose
                css={css`
                  width: 30px;
                  height: 30px;
                  color: rgba(123, 126, 143, 1);
                  margin-top: 5px;
                `}
              />
            </button>
          </div>
          <p
            css={css`
              color: rgba(123, 126, 143, 1);
              padding: 0 24px;
            `}
          >
            Are you sure to delete this pet?
          </p>
          <div
            className="buttongroup"
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 16px;
              margin-top: 24px;
            `}
          >
            <Button
              css={css`
                background-color: rgba(255, 241, 236, 1);
                font-family: "Satoshi", sans-serif;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: rgba(255, 112, 55, 1);
                font-size: 15px;
                border-radius: 20px;
                text-transform: none;
                transition: background-color 0.3s ease;
                width: 127px;
                height: 48px;

                &:hover {
                  color: #ffc9c9;
                }
                padding: 12px 24px 12px 24px;
                border-radius: 99px;
                border: none;
                cursor: pointer;
                gap: 8px;
              `}
              onClick={handleCloseReject}
            >
              Cancle
            </Button>
            <Button
              css={css`
                background-color: #ff7037;
                font-family: "Satoshi", sans-serif;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: white;
                font-size: 15px;
                border-radius: 20px;
                text-transform: none;
                transition: background-color 0.3s ease;
                width: 160px;
                height: 48px;

                &:hover {
                  color: black;
                }
                padding: 12px 24px 12px 24px;
                border-radius: 99px;
                border: none;
                cursor: pointer;
                gap: 8px;
              `}
              onClick={() => {
                updateStatus("Canceled");
              }}
            >
              Reject Booking
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openRating}
        onClose={handleCloseRating}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "800px",
            background: "white",
            borderRadius: "16px",
          }}
        >
          <div
            className="header_topic"
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0px 16px;
              border-bottom: 1px solid rgba(220, 223, 237, 1);
            `}
          >
            <h2>Rating & Review</h2>
            <button
              onClick={handleCloseRating}
              css={css`
                cursor: pointer;
              `}
            >
              <IoClose
                css={css`
                  width: 30px;
                  height: 30px;
                  color: rgba(123, 126, 143, 1);
                  margin-top: 5px;
                `}
              />
            </button>
          </div>
          <div
            className="content"
            css={css`
              padding: 40px;
            `}
          >
            <p
              css={css`
                padding: 0 24px;
                text-align: center;
              `}
            >
              <h3>What is your rate?</h3>
              <Box
                className="rating-star"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "4px",
                  marginBottom: "60px",
                  "& > legend": { mt: 2 },
                  "& .MuiRating-iconFilled": {
                    color: "#1ecd83",
                    fontSize: "50px",
                  },
                  "& .MuiRating-iconEmpty": { fontSize: "50px" },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Box>
            </p>
            <div
              className="buttongroup"
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 16px;
                margin-top: 24px;
              `}
            >
              <Button
                css={css`
                  background-color: rgba(255, 241, 236, 1);
                  font-family: "Satoshi", sans-serif;
                  font-weight: 700;
                  font-size: 16px;
                  text-align: center;
                  color: rgba(255, 112, 55, 1);
                  font-size: 15px;
                  border-radius: 20px;
                  text-transform: none;
                  transition: background-color 0.3s ease;
                  width: 127px;
                  height: 48px;

                  &:hover {
                    color: #ffc9c9;
                  }
                  padding: 12px 24px 12px 24px;
                  border-radius: 99px;
                  border: none;
                  cursor: pointer;
                  gap: 8px;
                `}
                onClick={handleCloseReject}
              >
                Cancle
              </Button>
              <Button
                css={css`
                  background-color: #ff7037;
                  font-family: "Satoshi", sans-serif;
                  font-weight: 700;
                  font-size: 16px;
                  text-align: center;
                  color: white;
                  font-size: 15px;
                  border-radius: 20px;
                  text-transform: none;
                  transition: background-color 0.3s ease;
                  width: 202px;
                  height: 48px;

                  &:hover {
                    color: black;
                  }
                  padding: 12px 24px 12px 24px;
                  border-radius: 99px;
                  border: none;
                  cursor: pointer;
                  gap: 8px;
                `}
              >
                Send Review&Rating
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      {bookingById && (
        <div
          className="section_topic"
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 1120px;
          `}
        >
          <div
            className="topic_textgroup"
            css={css`
              display: flex;
              gap: 24px;
            `}
          >
            <div
              className="topic_activebutton"
              onClick={() => {
                setIsProfilePage(false);
                navigate(`/sitter/${state.user.id}/booking-list`);
              }}
              css={css`
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
              `}
            >
              <IoIosArrowBack />
              <h3
                css={css`
                  color: rgba(42, 46, 63, 1);
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  margin: 0;
                `}
              >
                Booking List
              </h3>
            </div>
            <div className="topic_status">
              <p
                align="right"
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  color: ${getColorByStatus(bookingById.status)};
                  margin-bottom: 15px;
                `}
              >
                <RxDotFilled />
                {bookingById.status}
              </p>
            </div>
          </div>

          <div
            className="topic_bookingbutton"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {bookingById.status === "Waiting for confirm" && (
              <button
                css={css`
                  width: 160px;
                  border-radius: 99px;
                  padding: 12px 24px;
                  cursor: pointer;
                  background-color: rgba(255, 241, 236, 1);
                  color: rgba(255, 112, 55, 1);
                `}
                onClick={() => setOpenReject(true)}
              >
                Reject Booking
              </button>
            )}

            {bookingById.status === "Waiting for confirm" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  border-radius: 99px;
                  padding: 12px 24px;
                  cursor: pointer;
                  background-color: rgba(255, 112, 55, 1);
                  color: white;
                  margin-left: 8px;
                `}
                onClick={() => updateStatus("Waiting for service")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}

            {bookingById.status === "Waiting for service" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  border-radius: 99px;
                  padding: 12px 24px;
                  cursor: pointer;
                  background-color: rgba(255, 112, 55, 1);
                  color: white;
                  margin-left: 8px;
                `}
                onClick={() => updateStatus("In service")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}

            {bookingById.status === "In service" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  border-radius: 99px;
                  padding: 12px 24px;
                  cursor: pointer;
                  background-color: rgba(255, 112, 55, 1);
                  color: white;
                  margin-left: 8px;
                `}
                onClick={() => updateStatus("Success")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}

            {bookingById.status === "Success" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  border-radius: 99px;
                  padding: 12px 24px;
                  cursor: pointer;
                  background-color: rgba(255, 112, 55, 1);
                  color: white;
                  margin-left: 8px;
                `}
                onClick={() => {
                  setOpenRating(true);
                }}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}
          </div>
        </div>
      )}

      {bookingById && (
        <div
          className="section_content"
          css={css`
            width: 1120px;
            height: 1024px;
            background-color: white;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          `}
        >
          <div
            className="content_topic"
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              padding: 30px 70px 0px 70px;
            `}
          >
            <div
              className="detail"
              css={css`
                display: flex;
                flex-direction: column;
                gap: 4px;
              `}
            >
              <h4
                css={css`
                  font-size: 20px;
                  font-weight: 700;
                  color: rgba(174, 177, 195, 1);
                  margin: 0;
                `}
              >
                Pet Owner Name
              </h4>
              <p
                css={css`
                  font-size: 16px;
                  font-weight: 500;
                  margin: 0;
                `}
              >
                {bookingById.owners.full_name}
              </p>
            </div>
            <div
              className="viewprofile"
              onClick={() => {
                setOpen(true);
              }}
            >
              <p
                css={css`
                  font-size: 16px;
                  font-weight: 700;
                  color: rgba(255, 112, 55, 1);
                  margin: 0;
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  cursor: pointer;
                `}
              >
                <FiEye
                  css={css`
                    width: 20px;
                    height: 18px;
                  `}
                />
                View Profile
              </p>
            </div>
          </div>

          <div className="content" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Pet(s)
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              {bookingById.pets}
            </p>
          </div>

          <div className="content_card" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Pet Detail
            </h4>
            <div
              className="card"
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                gap: 16px;
              `}
            >
              {petById.map((pet, index) => {
                return (
                  <button
                    key={index}
                    css={css`
                      width: 207px;
                      height: 236px;
                      border: 1px solid rgba(220, 223, 237, 1);
                      border-radius: 16px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      background-color: rgb(255, 255, 255);
                      gap: 16px;
                    `}
                    onClick={() => {
                      setOpenPetDetail(true);
                      getPetById(pet.pet_id.id);
                    }}
                  >
                    <img
                      src={pet.pet_id.picture}
                      alt=""
                      css={css`
                        width: 104px;
                        height: 104px;
                        object-fit: cover;
                        border-radius: 100%;
                      `}
                    />
                    <h4
                      css={css`
                        font-size: 20px;
                        font-weight: 700;
                        text-align: center;
                        width: 159px;
                        height: 28px;
                        margin: 0;
                      `}
                    >
                      {pet.pet_id.pet_name}
                    </h4>
                    <p
                      css={css`
                        border: 1px solid;
                        width: 63px;
                        height: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                        border-radius: 99px;
                        color: ${pet.pet_id.pet_type.toLowerCase() === "bird"
                          ? "rgba(118, 208, 252, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "dog"
                          ? "rgba(28, 205, 131, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "cat"
                          ? "rgba(250, 138, 192, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "rabbit"
                          ? "rgba(255, 152, 111, 1)"
                          : "transparent"};
                        background-color: ${pet.pet_id.pet_type.toLowerCase() ===
                        "bird"
                          ? "rgba(236, 251, 255, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "dog"
                          ? "rgba(231, 253, 244, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "cat"
                          ? "rgba(255, 240, 241, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "rabbit"
                          ? "rgba(255, 245, 236, 1)"
                          : "transparent"};
                      `}
                    >
                      {pet.pet_id.pet_type}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="content_dulation" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Duration
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet date
            >
              {bookingById.duration} hours
            </p>
          </div>

          <div className="content_bookingdate" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Booking Date
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              {bookingById.booked_date}
            </p>
          </div>

          <div className="content_totalpaid" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Total Paid
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              {bookingById.price} THB
            </p>
          </div>

          <div className="content_transactiondate" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Transaction Date
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              {bookingById.created_at}
            </p>
          </div>

          <div className="content_transaction-no" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Transaction No.
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              {bookingById.id}
            </p>
          </div>

          <div className="content_additionmessage" css={contentStyle}>
            <h4
              css={css`
                font-size: 20px;
                font-weight: 700;
                color: rgba(174, 177, 195, 1);
                margin: 0;
              `}
            >
              Additional Message
            </h4>
            <p
              css={css`
                font-size: 16px;
                font-weight: 500;
                margin: 0;
              `}
              //addpet number
            >
              I love my dogs, care
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
