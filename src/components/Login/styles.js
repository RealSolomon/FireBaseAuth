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
  head: css`
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #254353;
    text-align: center;
  `,
  form: css`
    margin-top: 55px;
  `,
  label: css`
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
  pass: css`
    color: rgba(37, 67, 83, 0.4);
    font-weight: 600;
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
    margin-top: 20px;
  `,
};
