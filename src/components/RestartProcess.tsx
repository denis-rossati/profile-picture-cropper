import React from 'react';
import closeIcon from '../icons/closeX.png';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  setLogoImg: SetStateDefaultStringType,
  setComponent: SetStateDefaultStringType,
}

export const RestartProecss = ({
  setLogoImg,
  setComponent,
}: Props) => {
  
  const resetProcess = () => {
    setLogoImg('');
    setCompoenent('LogoInput');
  }

  return(
    <div>
      <button>
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  )
};
