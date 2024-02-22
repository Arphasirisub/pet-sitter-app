/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { display } from "@mui/system";
import { contentStyle } from "./ProfilePageStyle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProfilePage({ setIsProfilePage }) {
  const navigate = useNavigate();
  const { state, checkToken } = useAuth();
  const params = useParams();
  const [bookingById, setBookingByid] = useState();

  const [petById, setPetById] = useState();

  const getOwnerAndPetById = async () => {
    const result = await axios.get(
      `http://localhost:4000/bookings/sitter/${params.id}`
    );

    setBookingByid(result.data);
    setPetById(result.data.pet_bookings);
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
        align-items: center;
        padding: 40px 40px 40px 40px;
        height: 1024px;
        gap: 24px;
        background-color: rgba(246, 246, 249, 1);
      `}
    >
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
        <div className="topic_bookingbutton">
          <button
            css={css`
              width: 160px;
              border-radius: 99px;
              padding: 12px 24px 12px 24px;
              cursor: pointer;
              background-color: rgba(255, 241, 236, 1);
              color: rgba(255, 112, 55, 1);
            `}
          >
            Reject Booking
          </button>
          <button
            css={css`
              width: 175px;
              border-radius: 99px;
              padding: 12px 24px 12px 24px;
              cursor: pointer;
              background-color: rgba(255, 112, 55, 1);
              color: white;
              margin-left: 8px;
            `}
          >
            Confirm Booking
          </button>
        </div>
      </div>

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
            <div className="viewprofile">
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
            {/* <p
            css={css`
              font-size: 16px;
              font-weight: 700;

              margin: 0;
            `}
          >
            ii ror pap naa
          </p> */}
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
                console.log(pet.pet_id);
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
              (Still NULL waiting for reslove)
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
              {/* {bookingById.price} THB */}
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
              122312
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
              122312
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
