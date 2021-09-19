# Logo Cropper

This is an app where the user can insert a picture and crop as he please. After this, it is generated a URL of the cropped image to do whatever he want.

---

## Using the app

<details>
  <Summary>App display</Summary>

## Target

This is, actually, a test required by the croct team. Here I show some of my front-end web skills >:)

---

## How can I use it?

I did not deploy the app. But I'm planning to do in a close future. By now, you can can run `npm start` after cloning the repo whenever you want and running `npm i`.

---

## Tools

I have used mainly react + typescript for the entire project. I used the ESLint to help me organize the modules and prevent some small bugs (never forget to use lint, folks).

I also used [react-easy-crop](https://github.com/ricardo-ch/react-easy-crop) to help me to deal with the canvas element. I don't have that much experience with canvas, once a tried to do a clone of [this website](https://jacksonpollock.org/). But only that.

As I discussed with Juliana, from the croct team, for the sake of not taking 1 week to make the project, I saved the application from being properly tested

This aplication does not have a back end, but if it had, I probably would use multer and express to store the cropped image.

One of the requirements was "Clicking on save, the component should display the cropped logo and a button to restart the process. It must also provide some way for parent components to access the resulting image's raw data.". This put me in a doubt, for one second, I thought that I was required to use a tool to make the URL avaliable to the whole aplication. In other words, a global state. I did not implement this because I don't think that this was the purpose of the requirement. But due to the size of the application. I would choose context API instead of redux because it's more simple.
