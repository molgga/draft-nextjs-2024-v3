import { css } from '@emotion/react';

interface AlignPanelProps {
  children?: React.ReactNode;
}

const styleAside = css`
  background-color: #f00;
`;

export function AlignPanel(props: AlignPanelProps) {
  return (
    <div className="align-panel">
      <div css={styleAside}>aside</div>
      <div className="center">center</div>
      <div className="bside">aside</div>
    </div>
  );
}
