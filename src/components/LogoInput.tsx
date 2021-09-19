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
      <section
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={handleOnDropUpload}
      >
        <p>iae</p>
      </section>
    </>
  );
};
