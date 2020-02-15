/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const detailItemStyles = css`
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.25);

  .itemLabel {
    font-weight: bold;
  }

  &:last-of-type {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

function DetailItem(props) {
  return (
    <div css={detailItemStyles} {...props}>
      <span className="itemLabel" data-testid="detailItemLabel">
        {props.label}:{' '}
      </span>{' '}
      <span data-testid="detailItemText">{props.children}</span>
    </div>
  );
}

export default DetailItem;
