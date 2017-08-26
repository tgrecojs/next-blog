/** 
 * Emotion Styles
 * Dont know if 
 * import { css } from 'emotion';
    export const banner = css`
      composes: ${flexCol};
      background: #fff;
    `;

    export const navBar = css`
      display: 'flex'
      justify-content: space-around;
      align-items: center;
      max-width: 100%;
      max-height: 100%;
    `;
*/


export const PRIMARY_COLOR = '#569cb7';
export const PRIMARY_COLOR_TWO = '#88cde9';
export const PRIMARY_COLOR_THREE = '#1e6e87';
export const ACCENT_COLOR_ONE = '#556cb7';
export const ACCENT_COLOR_TWO = '#889aea';
export const ACCENT_COLOR__THREE = '#204287';
export const baseFont = {
  fontFamily: 'Lato',
  color: '#fff'
};

export const width60  = {
  width: '65%',
  lineHeight: '1.5',
  color: '#fff'
}

export const btnRow = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '1em'
};

export const postCard = {
  background: 'rgb(86, 156, 183)',
  padding: '1em',
  fontFamily: 'Lato',
  border: '1px solid white',
  borderRadius: '10px',
  margin: '1.5em',
  textAlign: 'center',
  lineHeight: '1.5'
}; 
export const loadingText = {
  fontFamily: 'Lato',
  textAlign: 'center',
  padding: '1em'
};


export const flexCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const addPadding = {
  padding: '1em',
  color: '#fff'
};

export const SecondaryBg = {
  backgroundColor: '#49558c'
};

export const customPostStyles = {
  background: 'rgb(86, 156, 183)',
  padding: '1em',
  border: '1px solid white',
  borderRadius: '10px',
  margin: '1.5em',
  textAlign: 'center',
  lineHeight: '1.5'
};
