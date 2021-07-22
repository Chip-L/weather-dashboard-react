// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// If your app uses a browser API that you need to mock in your tests or if you need a global setup before running your tests, add a src/setupTests.js to your project. It will be automatically executed before running your tests. (https://create-react-app.dev/docs/running-tests/)
import "@testing-library/jest-dom";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
