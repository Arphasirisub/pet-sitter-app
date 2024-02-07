/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../../../contexts/authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UpdatePetPage({ setIsCreatePet, allPet, setIsUpdatePet }) {
  const navigate = useNavigate();
  const { state, checkToken } = useAuth();
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div
      className="container_createpet"
      css={css`
        display: flex;
        flex-direction: column;
        height: 1364px;
      `}
    >
      <div
        className="section_topic"
        css={css`
          display: flex;
          align-items: center;
          margin: 0 30px;
        `}
      >
        <div
          className="topic_button"
          onClick={() => {
            setIsCreatePet(false);
          }}
          css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 20px 0 0 0;
          `}
        >
          <IoIosArrowBack />
          <h3
            onClick={() => {
              setIsUpdatePet(false);
              navigate(`/owner/${state.user.id}/yourPet`);
            }}
            css={css`
              font-weight: 700;
              font-size: 24px;
            `}
          >
            Your Pet
          </h3>
        </div>
      </div>
    </div>
  );
}
export default UpdatePetPage;
