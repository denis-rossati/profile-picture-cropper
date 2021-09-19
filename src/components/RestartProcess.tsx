import React from 'react';
import closeIcon from '../icons/closeX.png';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  setLogoImg: SetStateDefaultStringType,
  setComponent: SetStateDefaultStringType,
}

export const RestartProcess = ({
  setLogoImg,
  setComponent,
}: Props) => {
  
  const resetProcess = () => {
    setLogoImg('');
    setComponent('LogoInput');
  }

  return(
    <div>
      <button onClick={resetProcess}>
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  )
};
