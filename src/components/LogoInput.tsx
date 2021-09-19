import React from 'react';

type Props = {
  logoImg: null | string,
}

export const LogoInput = ({
  logoImg,
}: Props): JSX.Element => {

  const handleOnDropUpload = async (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    await manageAvatarState(file);
  }

  const manageAvatarState = async (file: File) => {

  }

  return (
    <>
      { logoImg && <img id="logoCropped" src={logoImg} alt="logo frame" />}
      <section
        onDragOver={(event) => event.preventDefault()}
        onDragEnter={(event) => event.preventDefault()}
        onDragLeave={(event) => event.preventDefault()}
        onDrop={handleOnDropUpload}
      >
        <p>dropa uma imagem em mim</p>
      </section>
    </>
  );
};
