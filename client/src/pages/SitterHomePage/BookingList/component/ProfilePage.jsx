/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";

function ProfilePage({ setIsProfilePage }) {
  return (
    <div
      className="container_profilepage"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 40px 80px 40px;
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
      <div
        className="section_content"
        css={css`
          width: 1120px;
          height: 1024px;
          background-color: white;
          border-radius: 16px;
        `}
      ></div>
    </div>
  );
}

export default ProfilePage;
