import React, { useState, useCallback} from 'react';
import Cropper from 'react-easy-crop';
import { RestartProcess } from './RestartProcess';
import makeCroppedImg from '../helper/cropImage';

import './styles/LogoCropper.css';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  logoImg: (string | undefined),
  setLogoImg: SetStateDefaultStringType,
  setComponent: SetStateDefaultStringType,
}

export const LogoCropper = ({
  logoImg,
  setLogoImg,
  setComponent
}: Props): JSX.Element => {
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({width: 0, height: 0, x: 0, y: 0});

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const handleSliderChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setZoom(parseFloat(value));

  const completingEdition = async () => {
    await makeCroppedImg(logoImg, croppedAreaPixels, setLogoImg, setComponent);
    setComponent('LogoInput');
  }

  return (
    <section>
      <div className="cropperContainer">
        <Cropper
          image={logoImg}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          style={ {
              containerStyle: {
                margin: '31px',
              },
          } }
        />
      </div>
      <div id="optionsContainer">
        <div id="innerOptions">
          <label>
            <p>Crop</p>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.05}
              onChange={handleSliderChange}
            />
          </label>
          <div id="saveButtonContainer">
            <button
              type="button"
              onClick={completingEdition}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <RestartProcess setLogoImg={setLogoImg} setComponent={setComponent} />
    </section>
  );
};