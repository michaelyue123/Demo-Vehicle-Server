# Demo-Vehicle-Server

A simple proxy backend server for React Application running on AWS Cloudfront. <br><br>

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#file-structure)
- [Resources](#resources)
- [Improvements](#improvements)

## Quick start

- clone the repo: `https://github.com/michaelyue123/Demo-Vehicle-Server.git`

- Navigate to project folder
  `cd [project folder]`

- Install dependencies:
  `npm install`

- Start the server:
  `npm start`

- Run the test:
  `npm test`

## Project Structure

```
Demo-Vehicle
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── public
├── config.js
├── index.js
├── api
│	└── vehicle.js
└── test
	└── test.js
```

## Resources

- Mocha, a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
- Express, a back end web application framework for Node.js.

## Improvements

Backend server is locally hosted at the moment. Please make sure you run backend locally before visiting the frontend url.
