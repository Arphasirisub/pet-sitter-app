/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { containerContentStyle, topicText } from "./ContentStyle";
import Detail from "./Detail";

function Content() {
  return (
    <div className="container_content" css={containerContentStyle}>
      <div className="section__topic">
        <h2 css={topicText}>
          "Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."
        </h2>
      </div>

      <Detail />
      <Content />
    </div>
  );
}

export default Content;
