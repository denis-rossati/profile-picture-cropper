import React from 'react';
import landscapeIcon from '../icons/landscape.png'

import './styles/LogoInput.css';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  logoImg: (undefined | string),
  setComponent: SetStateDefaultStringType,
  setLogoImg: SetStateDefaultStringType,
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
        setComponent('LogoCropper');
      } 
    } else {
      setLogoImg('');
      setComponent('ErrorComponent');
    }
  }

  return (
    <>
      {
        logoImg !== ''
        ? <img id="logoCropped" src={logoImg} alt="logo frame" />
        : <div id="styleHelperLogoInput" />
      }
      <section
        onDragOver={(event) => event.preventDefault()}
        onDragEnter={(event) => event.preventDefault()}
        onDragLeave={(event) => event.preventDefault()}
        onDrop={handleOnDropUpload}
      >
        <div>
          <p>
            <span>
              <img  
                id="landscapeIcon"
                src={landscapeIcon}
                alt="landscape icon"
              />
            </span>
            Organization Logo
          </p>
          <label>
            Drop the image here or click to browse.
            <input
              id="inputFile"
              type="file"
              accept="image/"
              onChange={handleChangeUpload}
            />
          </label>
        </div>
      </section>
    </>
  );
};
