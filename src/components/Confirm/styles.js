/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const styles = {
  content: css`
    display: flex;
    flex-direction: inherit;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 186px;
  `,
  leftside: css`
    float: left;
  `,
  rightside: css`
    margin-left: 243px;
    float: right;
  `,
  head: css`
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #254353;
    text-align: center;
  `,
  info: css`
    width: 294px;
    height: 51px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: rgba(37, 67, 83, 0.4);
    margin-top: 20px;
    margin-left: 70px;
  `,
  infomail: css`
    color: rgba(37, 67, 83, 0.75);
    display: inline;
  `,
  btn: css`
    width: 430px;
    height: 50px;
    background: #57b3e4;
    border-radius: 35px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 15px;

    &:disabled {
      background-color: rgba(87, 179, 228, 0.7);
    }
    &:active {
      background-color: rgba(87, 179, 228, 0.7);
    }
  `,
  lnk: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(37, 67, 83, 0.75);
    margin-left: 43%;
  `,
};
