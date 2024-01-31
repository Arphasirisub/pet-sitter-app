/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CustomizedTables from "./TableContent";

const bodyStyle = css`
  display: inline-flex;
  height: 952px;
  padding: 40px 40px 80px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  background: var(--gray-100, #f6f6f9);
`;

const topofbody = css`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  justify-content: space-between;
`;

const InputStyle = css`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  justify-content: space-between;
`;

const fontStyle = css`
  color: var(--gray-900, #2a2e3f);
  font-family: Satoshi;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-right: 980px;
`;

const Body = () => {
  return (
    <>
      <div css={bodyStyle}>
        <div css={topofbody}>
          <div css={fontStyle}>
            <h3>Booking List</h3>
          </div>

          <div>
            <input type="text" placeholder="Search..." css={InputStyle} />

            <select css={InputStyle}>
              <option value="true">True</option>
              <option value="fail">Fail</option>
            </select>
          </div>
        </div>
        <CustomizedTables />
      </div>
    </>
  );
};

export default Body;
