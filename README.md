## Instructions for Adam to set up the site on PythonAnywhere

1. Create a [PythonAnywhere](https://www.pythonanywhere.com) account.
2. Create a [Github](https://github.com/) account.
3. On the root directory on PythonAnywhere, clone this repository.
4. On PythonAnywhere, create a webapp, choosing Flask as the framework, Python 3.7 as the version, and the default path.
5. On the root directory on PythonAnywhere, clone this repository by typing `git clone https://github.com/yilunandrewgao/NostalgiaWebsite.git`.
6. On the created webapp page, change the source code directory to `.../NostalgiaWebsite/src` and the working directory to `.../NostalgiaWebsite`. 
`...` is whatever home directory is on PythonAnywhere.
7. Edit the WSGI configuration file and change project home variable to `.../NostalgiaWebsite/src` and change last line to `from app import app as application`.
8. To enable email on the site's webform, you need to add a password to a `.env` file. Open a bash console and go to `.../NostalgiaWebsite`.
Type in `echo "export PASSWORD='your_password'" >> .env`.
9. To download all dependencies, go to `.../NostalgiaWebsite` on the bash console and type in `pip3.7 install -r requirements.txt`.
10. To install React, type in `npm install react` on the console.
11. After installing React, type in `npm run build`.
12. Finally, go to the web app tab and reload the webpage.
13. To update the site, type in `git pull` in the root directory and type in `npm run build`


## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
