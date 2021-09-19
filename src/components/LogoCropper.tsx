import React, { useState, useCallback} from 'react';
import Cropper from 'react-easy-crop';

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
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({x: 0, y: 0});

  return (
    <section>
      <div>
      <Cropper
          image={logoImg}
          crop={crop}
          zoom={zoom}
          aspect={2/2}
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
      
    </section>
  );
};