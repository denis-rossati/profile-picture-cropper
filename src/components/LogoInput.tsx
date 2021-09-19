import React from 'react';

type Props = {
  logoImg: null | string,
}

export const LogoInput = ({
  logoImg,
}: Props): JSX.Element => {
  return (
    <>
      { logoImg && <img id="logoCropped" src={logoImg} alt="logo frame" />}
    </>
  );
};
