import React from 'react';

interface Props {
  logoImg: null | string,
  setComponentName: React.Dispatch<React.SetStateAction<string>>,
  setLogoImg: React.Dispatch<React.SetStateAction<string | null>>,
}

export const LogoInput = ({
  logoImg,
  setComponentName,
  setLogoImg,
}: Props): JSX.Element => {

  const handleOnDropUpload = async (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    await manageAvatarState(file);
  }

  const handleChangeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    await manageAvatarState(files[0]);
  }

  const manageAvatarState = async (file: File) => {
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      await reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLogoImg(reader.result as string);
        setComponentName('LogoCropper');
      } 
    } else {
      setLogoImg(null);
      setComponentName('InvalidFile');
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
        <label>
          Drop the image here or click to browse.
          <input
            id="inputFile"
            type="file"
            accept="image/"
            onChange={handleChangeUpload}
            style={{
              display: 'none',
            }}
          />
        </label>
      </section>
    </>
  );
};
