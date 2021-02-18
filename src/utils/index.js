/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    margin-top: 208px;
  `,
  confcont: css`
    display: flex;
    flex-direction: inherit;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 186px;
  `,
  head: css`
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #254353;
    text-align: center;
  `,
  lab: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(37, 67, 83, 0.75);
  `,
  holder: css`
    width: 430px;
    height: 40px;
    border: 0.5px solid #c7c7c7;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    padding-left: 20px;
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
  headcont: css`
    width: 100%;
    height: 81px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  `,
  logo: css`
    margin-left: 51px;
  `,
  navbar: css`
    background-color: #fff;
  `,
  headbtn: css`
    margin-right: 51px;
    background-color: #57b3e4;
    border-radius: 5px;
    padding: 10px 26px 10px 24px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    text-align: center;
  `,
};
