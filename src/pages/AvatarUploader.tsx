import React, { useState } from 'react';
import { LogoInput } from '../components/LogoInput';

const AvatarUploader = (): JSX.Element => {
  const [componentName, setComponentName] = useState('LogoInput');
  const [logoImg, setLogoImg] = useState<null | string>(null);

  const renderComponent = (): JSX.Element => {
    if (componentName === 'LogoInput') {
      return(<LogoInput
        logoImg={logoImg}
        setLogoImg={setLogoImg}
        setComponentName={setComponentName}
      />);
    }

  return(<p>hi</p>);
  }

  return (
    <main>
      { renderComponent() }
    </main>
  );
}

export default AvatarUploader;