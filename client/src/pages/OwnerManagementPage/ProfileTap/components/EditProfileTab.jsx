/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const bgbox = css`
  background-color: white;
  height: 747px;
  width: 802px;
`;

const bgbox2 = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const textprofilebox = css`
  width: 735px;
  height: 24px;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 500;
  margin-left: 40px;
`;

const profilepicturebox = css`
  margin-left: 40px;
  margin-top: 20px;
`;

const inputContainer = css`
  width: 840px;
  height: 18px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const inputStyle = css`
  flex-grow: 1;
  border: none;
  outline: none;
`;

function EditProfileTab() {
  return (
    <>
      <div css={bgbox}>
        <div css={bgbox2}>
          <div css={textprofilebox}>Profile</div>
        </div>
        <div css={profilepicturebox}>
          <img
            src="\src\PublicPicture\mogupforprofilepicture.png"
            alt="profilepicture"
            css={{
              width: 180,
              height: 180,
            }}
          />
        </div>
        <p css={textprofilebox}>Your Name*</p>
        <div css={inputContainer}>
          <input css={inputStyle} type="text" placeholder="Your Name" />
        </div>
        <div css={inputContainer}>
          <input css={inputStyle} type="text" placeholder="Your Name" />
        </div>
      </div>
    </>
  );
}
export default EditProfileTab;
