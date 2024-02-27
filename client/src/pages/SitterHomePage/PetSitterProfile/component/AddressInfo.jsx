/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  inputContainer,
  headingStyle,
  addressDetailInput,
  labelTitle,
  inputLayout,
  input,
  rowLayout,
} from "../Style/AddressInfoStyle";
import { useSitter } from "../../../../contexts/getSitters";
import { useEffect, useState } from "react";

function AddressInfo() {
  const {
    getSitterInfo,
    getSitterData,
    address,
    setAddress,
    district,
    setDistrict,
    subDistrict,
    setSubDistrict,
    province,
    setProvince,
    postCode,
    setPostCode,
  } = useSitter();

  useEffect(() => {
    getSitterData();
  }, []);

  useEffect(() => {
    setDistrict(getSitterInfo.district);
    setProvince(getSitterInfo.province);
    setPostCode(getSitterInfo.post_code);
    setSubDistrict(getSitterInfo.sub_district);
    setAddress(getSitterInfo.address_detail);
  }, [getSitterInfo]);

  return (
    <>
      <div css={inputContainer}>
        <p css={headingStyle}>Address</p>
        <label htmlFor="address" css={labelTitle}>
          Address detail*
        </label>
        <input
          css={addressDetailInput}
          required
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <div css={rowLayout}>
          <div css={inputLayout}>
            <label htmlFor="district">District*</label>
            <input
              type="text"
              id="district"
              name="district"
              css={input}
              required
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              value={district}
            />
          </div>
          <div css={inputLayout}>
            <label htmlFor="sub-district">Sub-district*</label>
            <input
              type="text"
              id="sub-district"
              name="sub-district"
              css={input}
              required
              onChange={(e) => {
                setSubDistrict(e.target.value);
              }}
              value={subDistrict}
            />
          </div>
        </div>
        <div css={rowLayout}>
          <div css={inputLayout}>
            <label htmlFor="province">Province*</label>
            <input
              type="text"
              id="province"
              name="province"
              css={input}
              required
              onChange={(e) => {
                setProvince(e.target.value);
              }}
              value={province}
            />
          </div>
          <div css={inputLayout}>
            <label htmlFor="post-code">Post code*</label>
            <input
              type="text"
              id="post-code"
              name="post-code"
              pattern="[0-9]{5}"
              css={input}
              required
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
              value={postCode}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressInfo;
