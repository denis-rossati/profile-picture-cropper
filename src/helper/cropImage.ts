interface PixelCoord {
  x: number;
  y: number;
  width: number;
  height: number;
}

type SetComponentName = React.Dispatch<React.SetStateAction<string | undefined>>;
type SetComponentImgSrc = React.Dispatch<React.SetStateAction<string | undefined>>

/* 
  If reached here, know that this function is not mine. 
  The lib sugest to use it right here: https://codesandbox.io/s/q8q1mnr01w?file=/src/cropImage.js
  I did my best to understand it
  and I could get an idea of what this function does
  but I need to improve my studies in 2d canvas
*/

const createImage = async (
  url: string,
  setComponentName: SetComponentName
  ) => {
  const image = new Image();
  image.addEventListener('load', () => image);
  image.addEventListener('error', () => setComponentName('ErrorComponent'));
  image.src = url;
  return image;
}

const makeCroppedImg = async (
    imageSrc: string | undefined,
    pixelCrop: PixelCoord,
    changeImgSrc: SetComponentImgSrc,
    setComponentName: SetComponentName
  ): Promise<void> => {

  if (imageSrc === undefined) {
    setComponentName('ErrorComponent');
    return;
  }

  const image = await createImage(imageSrc, setComponentName);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  const maxSize = Math.max(image.width, image.height);

  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  context.translate(safeArea / 2, safeArea / 2);
  // I wish I could put a range to rotate the image,
  // but it would escape the escope of the rest requirements XD
  context.rotate(0);
  context.translate(-safeArea / 2, -safeArea / 2)

  context.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5,
  )

  const data = context.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  context.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  canvas.toBlob((file) => changeImgSrc(URL.createObjectURL(file)), 'image/png');
}

export default makeCroppedImg;