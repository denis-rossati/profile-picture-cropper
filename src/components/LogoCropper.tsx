import React, { useState, useCallback} from 'react';

interface Props {
  logoImg: string,
  setLogoImg: React.Dispatch<React.SetStateAction<string | null>>,
  setComponent: React.Dispatch<React.SetStateAction<string>>,
}

export const LogoCropper = ({
  logoImg,
  setLogoImg,
  setComponent
}: Props): JSX.Element => {
  return (
    <div>
      <p>oiiiii</p>
    </div>
  );
};