/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

function Header() {
  return (
    <div className="header">
      <div
        className="header__logogroup"
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div></div>
        <div className="header__logogroup--text">
          <p
            css={css`
              font-size: 80px;
              color: black;
              text-align: center;
              font-weight: bold;
              padding: 0;
              margin: 0;
            `}
          >
            Pet Sitter,
            <br /> Perfect,
            <br /> For Your Pet.
          </p>
          <p
            css={css`
              color: black;
              text-align: center;
            `}
          >
            Find your perfect pet sitter with us.
          </p>
        </div>
        <div></div>
      </div>
      <div className="header__bargroup">
        <div
          className="header__bargroup--checkoutbox"
          css={css`
            margin-top: 80px;
            margin-left: 300px;
          `}
        >
          <span>Pet Type:</span>
          <input
            type="checkbox"
            id="animalcategory1"
            name="animalcategory1"
            value="dog"
          />
          <label htmlFor="animalcategory1">Dog</label>
          <input
            type="checkbox"
            id="animalcategory2"
            name="animalcategory2"
            value="cat"
          />
          <label htmlFor="animalcategory2">Cat</label>
          <input
            type="checkbox"
            id="animalcategory3"
            name="animalcategory3"
            value="bird"
          />
          <label htmlFor="animalcategory3">Bird</label>
          <input
            type="checkbox"
            id="animalcategory4"
            name="animalcategory4"
            value="rabbit"
          />
          <label htmlFor="animalcategory4">Rabbit</label>
        </div>
        <div className="header__logogroup--rating"></div>
      </div>
    </div>
  );
}
export default Header;
