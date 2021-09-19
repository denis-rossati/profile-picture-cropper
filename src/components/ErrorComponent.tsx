import React from 'react';
import { RestartProcess } from './RestartProcess';
import atentionIcon from '../icons/atentionIcon.png';

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
      <article>
        <div>
          <img src={atentionIcon}  alt="atention icon" />
        </div>
        <div>
          <p>Sorry, the upload failed.</p>
          <button
            onClick={takeToTheInitialComponent}
          >
            Try again
          </button>
        </div>
        <RestartProcess setLogoImg={setLogoImg} setComponent={setComponent} />
      </article>
  );
};