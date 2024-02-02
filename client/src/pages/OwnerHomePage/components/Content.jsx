/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  allStarSize,
  cardContentText,
  detailStyle,
  headerContentText,
  topicText,
} from "./BodyStyle";
import largecat from "../../../PublicPicture/large-cat.png";
import bluestar from "../../../PublicPicture/bluestar.png";
import pinkstar from "../../../PublicPicture/pinkstar.png";
import greenstar from "../../../PublicPicture/greenstar.png";
import yellowstar from "../../../PublicPicture/yellowstar.png";
import womenandcat from "../../../PublicPicture/womenandcat.png";
import catanddog from "../../../PublicPicture/catanddog.png";
import womenanddog from "../../../PublicPicture/womenanddog.png";

function Content() {
  return (
    <div
      className="container_content"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;
        width: 100%;
        height: 1455px;
      `}
    >
      <div className="section__topic">
        <h2 css={topicText}>
          "Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."
        </h2>
      </div>
      <div className="section__detail" css={detailStyle}>
        <div
          className="detail_des"
          css={css`
            width: 468px;
            height: 600px;
          `}
        >
          <h3 css={headerContentText}>
            {" "}
            <img src={bluestar} alt="bluestar" css={allStarSize} /> Boarding
          </h3>
          <p>
            Your pets stay overnight in your sitter’s home. They’ll be treated
            like part of the family in a comfortable environment.
          </p>

          <h3 css={headerContentText}>
            {" "}
            <img src={pinkstar} alt="pinkstar" css={allStarSize} /> House
            Sitting
          </h3>
          <p>
            Your sitter takes care of your pets and your home. Your pets will
            get all the attention they need without leaving home.
          </p>

          <h3 css={headerContentText}>
            {" "}
            <img src={greenstar} alt="greenstar" css={allStarSize} /> Dog
            Walking
          </h3>
          <p>
            Your dog gets a walk around your neighborhood. Perfect for busy days
            and dogs with extra energy to burn.
          </p>

          <h3 css={headerContentText}>
            {" "}
            <img src={yellowstar} alt="yellowstar" css={allStarSize} /> Drop-In
            Visits
          </h3>
          <p>
            Your sitter drops by your home to play with your pets, offer food,
            and give potty breaks or clean the litter box.
          </p>
        </div>
        <div className="detail_image">
          <img src={largecat} alt="largecat" />
        </div>
      </div>
      <div
        className="section__card"
        css={css`
          display: flex;
          justify-content: space-around;
          width: 1280px;
          height: 410px;
          text-align: center;
        `}
      >
        <div
          className="card_1"
          css={css`
            text-align: center;
            width: 368px;
          `}
        >
          <div className="card_image-1">
            <img src={womenandcat} alt="womenandcat" />
          </div>
          <div className="card_des-1">
            <h3 css={cardContentText}>Connect With Sitters</h3>
            <p>
              Find a verified and reviewed sitter who’ll keep your pets company
              and give time.
            </p>
          </div>
        </div>

        <div
          className="card_2"
          css={css`
            text-align: center;
            width: 368px;
          `}
        >
          <div className="card_image-2">
            <img src={catanddog} alt="catanddog" />
          </div>
          <div className="card_des-2">
            <h3 css={cardContentText}>Better For Your Pets</h3>
            <p>
              Pets stay happy at home with a sitter who gives them loving care
              and companionship.
            </p>
          </div>
        </div>

        <div
          className="card_3"
          css={css`
            text-align: center;
            width: 368px;
          `}
        >
          <div className="card_image-3">
            <img src={womenanddog} alt="womenanddog" />
          </div>
          <div className="card_des-3">
            <h3 css={cardContentText}>Calling All Pets</h3>
            <p>
              Stay for free with adorable animals in unique homes around the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
