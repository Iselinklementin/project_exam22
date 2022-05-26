This is my project exam 2, made with [Next.js](https://nextjs.org/).

## Getting Started

First, install the development server:

```bash
npm install
# then
npm run dev
```

If you are using Next, don't forget that the component you pass the props to from getServerSideProps or getStaticProps also needs prop type checks.

https://artisansweb.net/how-to-use-application-passwords-in-wordpress-for-rest-api-authentication/#:~:text=Head%20over%20to%20the%20Users,password%20with%20or%20without%20spaces.

https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/

https://react-hook-form.com/api/usecontroller/controller/

https://michaelsoriano.com/create-a-file-uploader-with-react-and-wordpress-rest-api-media/

https://www.edmundcwm.com/uploading-media-using-the-wp-rest-api-and-javascript/

https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/

https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa

javascript.plainenglish.io/custom-hook-in-react-js-for-calling-api-useapi-7de24b42729c

https://developer.wordpress.org/rest-api/

http://wp-api.org/node-wpapi/guides/2016/08/15/create-a-post-with-featured-media.html

https://axios-http.com/docs/post_example

https://react-icons.github.io/react-icons

https://blog.logrocket.com/best-styling-options-nextjs/

https://medium.com/nerd-for-tech/using-next-js-with-styled-components-easy-dfff3849e4f1

searchbar: https://www.youtube.com/watch?v=QtJiQXfAqPg

https://github.com/withspectrum/spectrum

https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

cards:

https://stackoverflow.com/questions/34189370/how-to-repeat-an-element-n-times-using-jsx-and-loadsh

https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

https://bobbyhadz.com/blog/javascript-remove-first-word-from-string

https://www.kindacode.com/article/passing-data-via-a-link-component-in-next-js/

https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8

https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook

https://github.com/react-icons/react-icons/issues/509

https://codesandbox.io/s/react-hook-form-js-forked-rezdf8?file=/src/App.js:277-302

---

If you get this warning in the console:
DeprecationWarning: Invalid 'main' field in '.../node_modules/react-icons/package.json' of 'lib'. Please either fix that or report it to the module author.

You can remove it by changing this in react-icons package.json:

Replace this:
"main": "lib",
"types": "./lib/esm/index.d.ts",

With this:
"main": "lib/cjs/index.js",
"module": "lib/esm/index.js",
"types": "lib/esm/index.d.ts",

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
