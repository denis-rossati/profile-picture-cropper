import React, { useState } from 'react';
import { LogoInput } from '../components/LogoInput';
import {LogoCropper} from '../components/LogoCropper';

const AvatarUploader = (): JSX.Element => {
  const [componentName, setComponentName] = useState('LogoInput');
  const [logoImg, setLogoImg] = useState<null | string>(null);

  const renderComponent = (): JSX.Element => {
    switch(true) {
      case componentName === 'LogoInput': return (
        <LogoInput
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          setComponentName={setComponentName}
        />
      );
      case componentName === 'LogoCropper': return (
        <LogoCropper />
      );
      default: return (
        <LogoInput
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          setComponentName={setComponentName}
        />
      )
    }
  }

  return (
    <main>
      { renderComponent() }
    </main>
  );
}

export default AvatarUploader;