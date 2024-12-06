# Electron + TypeScript + Vite + React

This template is based on Vite React + TypeScript official template with electron dependency added. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This templates also offers a preconfigured debug that works in the 'main' and 'renderer' proceses at the same time.

Also a tiped preload is configured and working.

## Why this template ?

When I started building an Electron app, I realized that there were a lot of options and combinations of technologies. Most of them were complex and had a lot of unnecessary dependencies.
Other options were simple but introduced a boilerplate that was difficult to understand and maintain, like Electron Forge.  
Also, I was very surprised that when I created a new project with Electron Forge, from the first minute I already had warnings about obsolete dependencies.  
So I decided to investigate and create a simple template, with very few dependencies and that was easy to maintain.  
It also includes the preload and the debugger ready to be used.

I hope you find it useful.

## Getting started

1. Clone this Repo.
2. Use `npm install` to install all dependencies
3. Execute the `dev:electron` script to launch the app.

> **Note**:  
> Depending on when you download this template, you may want to update the version of the dependencies in the `package.json`.

## Structure and overview

-   The **React** files are stored in the `src/ui` folder except the `index.html` that have to be in the root folder. The output files goes to the `dist-react` folder.
-   The **Electron** files are stored in the `src/electron` folder. The output files goes to the `dist-electron` folder.

This template is designed to make electron work with the transpiled files stored in the `dist-electron` and `dist-react` folders.
Electron-Builder will generate distributables on the `dist` folder.

## Scripts and debug

**Nodemon** is used to watch for file changes. `nodemon.json` contains a basic configuration.

-   **dev:electron**: The mains script. Launch the Electron app and watch for file changes.
-   **dev:ui-only**: Launch the Vite server with the React project. Use this if you only want to work on UI side like a webpage, but Electron queries will not work.
-   **watch**: Executes the nodemon watch service on all files located in the `src` folder. Every changes will make nodemon transpile all the 'src' folder.
-   **build**: Transpile the React and Electron TypeScript files to the JavaScript files in theire corresponding dist directories.
-   **lint**: Launch the EsLint check.
-   **preview**: Same as `dev:ui-only` but with transpiled files. This command is usefull to check how UI will look in production.
-   **dist:win**: Electron-builder script to create Windows distributables. Output files are stored in the `dist` folder.
-   **dist:mac**: Electron-builder script to create Mac distributables. Output files are stored in the `dist` folder.
-   **dist:linux**: Electron-builder script to create Linux distributables. Output files are stored in the `dist` folder.
-   **clean**: Delete the `dist`, `dist-electron` and `dist-react` folders.

Modify the electron-builder.json file to generate the output you want.

> **Note:**  
> Electron-builder recommends you to build the packages on the corresponding OS. What it means that you should run `dist:win` on Windows OS.

If you want to debug the app:

1. Add the breakpoints in your code.
2. run the `watch` script.
3. Open the VSCode debug panel and select `Electron: All"` in the `RUN AND DEBUG` selector. and press the play button or F5.

The App will automatically launch in debug mode with the Nodemon watch activated.
When you make changes to the files, Nodemon will generate the new files. You will need to `restart` (or press Ctrl + Shift + F5) the debugger to display the changes.

When you use the `Electron: All` option, VSCode will launch 2 debugger session at the same time. So if you stay too much debugging in the main process without opening the React view, you will get an error from the second debugger. That is a normal behaviour. When you finish debuggin the main process just relaunch the debuger to continue debuging in the view.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname
        }
    }
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
    // Set the react version
    settings: { react: { version: "18.3" } },
    plugins: {
        // Add the react plugin
        react
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules
    }
});
```
