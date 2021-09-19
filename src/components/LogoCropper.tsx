import React, { useState, useCallback} from 'react';
import Cropper from 'react-easy-crop';

interface Props {
  logoImg: (string | undefined),
  setLogoImg: React.Dispatch<React.SetStateAction<string | undefined>>,
  setComponent: React.Dispatch<React.SetStateAction<string>>,
}

export const LogoCropper = ({
  logoImg,
  setLogoImg,
  setComponent
}: Props): JSX.Element => {
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({x: 0, y: 0});

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const handleSliderChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setZoom(parseFloat(value));

  const completingEdition = async (event) => {
    event.preventDefault();
    await makeCroppedImg(logoImg, croppedAreaPixels, setLogoImg, setComponent);
    setComponent('LogoInput');
  }

  return (
    <section>
      <div>
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
      <div>
        <div>
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
          <div>
            <button
              type="submit"
              onClick={completingEdition}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};