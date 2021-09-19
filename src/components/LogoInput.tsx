import React from 'react';

interface Props {
  logoImg: null | string,
  setComponent: React.Dispatch<React.SetStateAction<string>>,
  setLogoImg: React.Dispatch<React.SetStateAction<string | null>>,
}

export const LogoInput = ({
  logoImg,
  setComponent,
  setLogoImg,
}: Props): JSX.Element => {

  const handleOnDropUpload = async (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    await manageAvatarState(file);
  }

  const manageAvatarState = async (file: File) => {
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      await reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLogoImg(reader.result as string);
        setComponent('LogoCropper');
      } 
    } else {
      setLogoImg(null);
      setComponent('InvalidFile');
    }
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
