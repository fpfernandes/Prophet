# Prophet Automation

This repository contains a BDD test automation suite for validating key flows in the Prophet platform using Playwright and Cucumber.

## What this project does

The automation covers scenarios such as:

- Contact creation
- Campaign creation

The scenarios are written in Gherkin and executed with Playwright through page object classes to keep the code organized and reusable.

## Technologies used

- Node.js
- Playwright
- Cucumber
- JavaScript (ES modules)

## Prerequisites

Before running the tests, make sure you have installed:

- Node.js 18 or higher
- A Chrome/Chromium browser compatible with remote debugging

## Installation

From the project root, run:

```bash
npm install
```

## Running the browser with remote debugging

The tests connect to a browser already opened via CDP (Chrome DevTools Protocol) on port 9222.

On Windows, you can open Chrome with:

```powershell
start chrome.exe --remote-debugging-port=9222 --user-data-dir=".\user_data"
```

## Running the tests

After starting the browser, run:

```bash
npm run test:bdd
```

## Project structure

```text
features/
  criar_campanha.feature
  criar_contato.feature
  hooks.js
  support/
    pages/
      CampanhaPage.js
      ContatosPage.js
      LoginPage.js
      MenuLateral.js
    steps/
      criar_campanha.steps.js
      criar_contato.steps.js
```

## Notes

- The scenarios are located in `features/*.feature`.
- The automation steps are in `features/support/steps`.
- UI interactions are encapsulated in page object classes under `features/support/pages`.
- The project uses a browser context connected via `chromium.connectOverCDP('http://localhost:9222')`.

## Author

This project was created for UI test automation with a focus on Prophet business flows.
