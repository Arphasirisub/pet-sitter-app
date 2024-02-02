/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import imgimport from "../../../../PublicPicture/imgimport.png";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { importButtonImgStyle, sectionImportIngStyle } from "./CreatePetStyle";

function SectionImportImg() {
  return (
    <div className="section_importimg" css={sectionImportIngStyle}>
      <img src={imgimport} alt="imgimport" />
      <img src={importbutton} alt="importbutton" css={importButtonImgStyle} />
    </div>
  );
}

export default SectionImportImg;
