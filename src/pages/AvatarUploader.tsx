import React, { useState } from 'react';

const AvatarUploader = (): JSX.Element => {
  const [componentName, setComponentName] = useState('LogoInput');
  const [logoImg, setLogoImg] = useState<null | string>(null);

  const renderComponent = (): JSX.Element => {
    if (componentName === 'LogoInput') {
      return(<p>hello</p>);
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