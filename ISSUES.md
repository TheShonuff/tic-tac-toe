Hello Joe, Congrats on finishing this challenge !
While the project itself looks awesome, there are some issues in regard to your react's codes which I like to mention :

- First of all, remove the files which you are not using in your project from the codebase, for example you have not written any tests for your project, so you can remove the `App.test.js` and 'setupTests.js` so people won't get confused when they are exploring your repo.

- You must create separate directories for different purposes, Now you all the resources are living in `src` directory, This is working, there is no issue with that, But in the eye of the another developer who wants to use your project this looks extremly cluttered.
  My recommendation is creating `/components` directory and put each component inside in it's own separeted folder, for example `/components/game/Game.js`.
  No matter how small our project is, we must follow the best practices anyway.

- For exporting and importing files, The best practice is creating an `index.js` file inside each directory and export them once from it's directory, and then importing them all at once from there. To make this more clear I give you an example : You have imported assets in each file by pointing at them like

```js
import Xicon from "./assets/icon-x.svg";
import Oicon from "./assets/icon-o.svg";
import logo from "./assets/logo.svg";
```

Now, what if at the middle of the project we decide to change the `icon-x.svg` name to `icon-y.svg` ? You guessed it, all hell will break loose ! We must go and find each folder which uses Xicon and manually change it's name to Yicon and also fix the import path. The better way is isolate the import inside it's directory so each time we want to change something's name, we only change it at one place. So here is my recommended approach :

```js
// ./assets/index.js
export { default as Xicon } from "./icon-x.svg";
export { default as Oicon } from "./icon-o.svg";
export { default as logo } from "./logo.svg";
export { default as IconRestart } from "./icon-restart.svg";
export { default as OiconOutline } from "./icon-o-outline.svg";
export { default as XiconOutline } from "./icon-x-outline.svg";
```

Then inside the component :

```js
// ./components/someComponent/SomeComponent.js
import { OiconOutline, Oicon, Xicon, XiconOutline } from "../../assets";
```

- Now let's talk about structuring your jsx. First of all you have to keep something in mind when working with react, I kinda made it a rule for myself : **If your component is exceeding 100 lines of code, something is wrong !** . No one tells you that, React won't throw any error, and at that moment everything works fine, but when you come back to it after a week or so, or when you need to add a feature to your app after some time, It becomes a nightmare ! ( trust me on that I learnt it the hard way ). Each component should ONLY DO ONE THING at a time, For example I'm looking at your `Board` component, This is the sacred temple of your project and no one has the guts to touch this file :D it's 253 lines of code and there are all sort of functions, loops, 11 useStates, many if and else statements and ternary operators, and then you have passed all these stuff as props to different components so if we touch anything the whole app breaks.
  Here is my solution for this issue, You need to isolate the game's logic inside an isolated context and then provide it to the components which needs them. Each component should interact with the context on it's own term and should not depend on other components in order to work, this way you can split `Board.js` into many small sub components so you can easily make changes to them and maintain your app.

- For styling, I recommend you to use learn CSS modules alongside with [classnames](https://www.npmjs.com/package/classnames) npm package, Using global css may cause conflicts with css classnames and cause bugs in your app, with css modules you can make sure that css classnames are isolated inside component's scope.

- I saw you have used react-device-detect library, This library has very special usecases and for your project you could've easily created a custom useWindowWidth hook ( You can more about this on google, it's really easy to create ) and show components based on user's device width instead of using a library.

That's all I had to say, I also opened a PR to your github repo which fixes some of these issues. I hope this helps you to improve your react coding skills. Overall great job and keep it up
