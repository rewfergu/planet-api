/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonStyles = css`
  background: #eaeaea;
  padding: 7px 15px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 4px;
`;

export default function Button(props) {
  return (
    <button css={buttonStyles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
