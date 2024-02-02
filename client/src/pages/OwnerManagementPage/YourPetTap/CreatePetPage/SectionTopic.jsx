/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import {
  sectionTopicStyle,
  topicButtonStyle,
  topicTextStyle,
} from "./CreatePetStyle";

function SectionTopic({ setIsCreatePet }) {
  return (
    <div className="section_topic" css={sectionTopicStyle}>
      <div
        className="topic_button"
        onClick={() => {
          setIsCreatePet(false);
        }}
        css={topicButtonStyle}
      >
        <IoIosArrowBack />
        <h3
          onClick={() => {
            setIsCreatePet(false);
          }}
          css={topicTextStyle}
        >
          Your Pet
        </h3>
      </div>
    </div>
  );
}

export default SectionTopic;
