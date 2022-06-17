Hello Joe, Congrats on finishing this challenge !
While the project itself looks awesome, there are some issues in regard to your react's codes which I like to mention :

- First of all, remove the files which you are not using in your project from the codebase, for example you have not written any tests for your project, so you can remove the `App.test.js` and 'setupTests.js` so people won't get confused when they are exploring your repo.

- You must create separate directories for different purposes, Now you all the resources are living in `src` directory, This is working, there is no issue with that, But in the eye of the another developer who wants to use your project this looks extremly cluttered.
  My recommendation is creating `/components` directory and put each component inside in it's own separeted folder, for example `/components/game/Game.js`.
  No matter how small our project is, we must follow the best practices anyway.
