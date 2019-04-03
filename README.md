<h1 align="center">
  Hack Quiz
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/1f4758a3-0a5b-4f88-9bf0-9f7c98163b6e/deploy-status)](https://app.netlify.com/sites/hackquiz/deploys)

> This is an WIP project to collect various question and answers in quiz format that I have come accross.

<br>

:information_source: &nbsp;This project contains test questions and answers that can be used as a test your knowledge or during an interview/exam.

:heavy_check_mark: &nbsp;The answers are only **examples** and do not exhaust the whole topic. Most of them contains **useful resources** for a deeper understanding.

:warning: &nbsp;Questions marked **`***`** don't have answer yet or answer is incomplete - **make a pull request to add them**!

:traffic_light: &nbsp;If you find a question which doesn't make sense, or one of the answers doesn't seem right, or something seems really stupid; **please make a pull request**.

<br>

<p align="center">
  » <b><code><a href="https://github.com/phaneendra/hack-quiz/issues">All suggestions are welcome</a></code></b> «
</p>

<br>

## Table of Contents

| <b><u>The type of chapter</u></b>                                                        | <b><u>Short description</u></b> |
| :--------------------------------------------------------------------------------------- | :------------------------------ |
| <b>[AWS](#)</b>                                                                          |                                 |
| :small_orange_diamond: [Ec2 and Compute](../blob/master/data/aws/ec2-compute.md)         |                                 |
| :small_orange_diamond: [VPC and Networks](../blob/master/data/aws/vpc.md)                |                                 |
| :small_orange_diamond: [DNS and Route53](../blob/master/data/aws/dns-r53.md)             |                                 |
| :small_orange_diamond: [Storage Services](../blob/master/data/aws/storage-services.md)   |                                 |
| :small_orange_diamond: [Database Services](../blob/master/data/aws/database-services.md) |                                 |

<br>

# Usage

Loosely based on [Petr Trofimov's Quiztext](https://github.com/ptrofimov/quiztext), write quizzes using a markdown-like syntax which gets parsed into JSON. It supports radio (one selection), checkbox (multi select), and range (one selection, with syntactical sugar) questions, and looks like this:

```
Question 1: Why would I use this?
- [ ] ( ) You want to easily write quizzes that can be parsed into JavaScript
- [ ] (*) Some questions might have a right answer
- [ ] (A) Answers might have different values than labels

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>your notes</p>
</details>

What about checkboxes?
- [ ] [ ] Write checkbox ("multi-select") questions with square brackets
- [ ] [*] These can have...
- [ ] [*] Multiple right answers, or just one
- [ ] [*B] They can also have different values than labels

<details><summary>Answer</summary>
<p>A,B</p>
</details>
<details><summary>Description</summary>
<p>your notes description or explanation</p>
</details>

```

These would get parsed into friendly JSON:

```js
[{
  question: 'Question 1: Why would I use this?',
  type: 'radio',
  answers: [{
    name: 'You want to easily write quizzes that can be parsed into JavaScript',
    value: 'You want to easily write quizzes that can be parsed into JavaScript'
  }, {
    name: 'Some questions might have a right answer',
    value: 'Some questions might have a right answer',
    correct: true
  }, {
    name: 'Answers might have different values than labels',
    value: 'A'
  }],
  answer: [{A}],
  decsription: 'your notes'
}, {
  question: 'What about multi-select?',
  type: 'checkbox',
  answers: [{
    name: 'Write multi-select (colloquially "checkbox") questions with square brackets',
    value: 'Write multi-select (colloquially "checkbox") questions with square brackets'
  }, {
    name: 'These can have...',
    value: 'These can have...',
    correct: true
  }, {
    name: 'Multiple right answers, or just one',
    value: 'Multiple right answers, or just one',
    correct: true
  }, {
    name: 'They can also have different values than labels',
    value: 'B',
    correct: true
  }],
  answer: [{A,B,C}],
  decsription: 'your notes'
}]
```

## 🚀 Quick start

1.  **Clone this repo**

    fork or clone this repo and start submitting PR's.

    ```sh
    # clone this repo
    git clone https://github.com/phaneendra/hack-quiz
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd sites/hackquiz
    npm start
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `sites/hackquiz` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Site.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
