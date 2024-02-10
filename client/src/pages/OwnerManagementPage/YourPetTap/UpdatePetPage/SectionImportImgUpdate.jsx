/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import {
  importButtonStyle,
  pictureById,
  sectionImportImgStyle,
} from "./UpdatePetStyle.jsx";

function SectionImportImgUpdatePage() {
  const { postById } = useMyPetsTools();
  return (
    <div className="section_importimg" css={sectionImportImgStyle}>
      {/* <img
      src={imgimport}
      alt="imgimport"
      css={css`
        position: relative;
      `}
    /> */}
      <img src={postById.picture} alt="" css={pictureById} />
      <img src={importbutton} alt="importbutton" css={importButtonStyle} />
    </div>
  );
}

export default SectionImportImgUpdatePage;
