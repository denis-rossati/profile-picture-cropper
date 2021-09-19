import React, { useState } from 'react';
import { LogoInput } from '../components/LogoInput';
import {LogoCropper} from '../components/LogoCropper';
import { ErrorComponent } from '../components/ErrorComponent';

const AvatarUploader = (): JSX.Element => {
  const [componentName, setComponentName] = useState<string | undefined>('LogoInput');
  const [logoImg, setLogoImg] = useState<string | undefined>('');

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
        <LogoCropper
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          setComponent={setComponentName}
        />
      );
      case componentName === 'ErrorComponent': return (
        <ErrorComponent
          setLogoImg={setLogoImg}
          setComponent={setComponentName}
        />
      )
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