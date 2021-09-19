import React from 'react';

type SetStateDefaultStringType = React.Dispatch<React.SetStateAction<string | undefined>>;

interface Props {
  setLogoImg: SetStateDefaultStringType,
  setComponent: SetStateDefaultStringType,
}

export const ErrorComponent = ({
  setLogoImg,
  setComponent,
}: Props): JSX.Element => {

  const takeToTheInitialComponent = () => {
    setLogoImg('');
    setComponent('InputReceiving');
  }

  return (
    <div>
      <article>
        <div>
          <img src={}  alt="atention icon" />
        </div>
        <div>
          <p>Sorry, the upload failed.</p>
          <button
            onClick={takeToTheInitialComponent}
          >
            Try again
          </button>
        </div>
      </article>
    </div>
  );
};