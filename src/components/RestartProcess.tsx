import React from 'react';
import closeIcon from '../icons/closeX.png';

import './styles/RestartProcess.css';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  setLogoImg: SetStateDefaultStringType,
  setComponent: SetStateDefaultStringType,
}

export const RestartProcess = ({
  setLogoImg,
  setComponent,
}: Props): JSX.Element => {
  
  const resetProcess = () => {
    setLogoImg('');
    setComponent('LogoInput');
  }

  return(
    <div id="closeButton">
      <button onClick={resetProcess}>
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  )
};
