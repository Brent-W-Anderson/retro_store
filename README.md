
# retro_store
  ## ** Make sure all of the requirements & project dependencies are installed before trying to create a bundle or add/modify code. **

  ## REQUIREMENTS:
  ### You will need to have Node and GIT installed before you can setup the project with its dependencies.
  ### You will also need to have WAMP/XXAMP or some other form of server that can run PHP before being able to see the project locally.

  ## SETUP:
  ### ```yarn reset``` will reset the dist directory contents to empty.
  ### ```yarn bundle``` will bundle a distributable version of the app into the dist directory.
  ### ```yarn url``` will open the browser at this specified location.
  ### ```yarn start``` will open the browser at the specified *url* (the app assumes a virtual host has been setup for this location). A bundle will also be created (on this script specifically, webpack will watch for any saved changes but a browser refresh will need to be done manually to see those changes).

  ### ** run wamp/xxamp from your dist directory by changing the *_url_ script to whatever location the server is running your projects from.* **

  ## RAWG API:
  ### create your own api key here: https://rawg.io/apidocs and create a file specifically named ```RAWG_KEY.php``` at the root of the project. add ```$RAWG_KEY=""``` with your specific key within the quotes. Start the project and you should be good to go!
## Added a new dependecy for carousel ## 
```yarn add react-slick``` OR ```npm install react-slick --save```
AND 
```npm install slick-carousel --save```
