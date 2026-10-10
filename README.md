# Jones Automation Exercise

**Author:** Levi Silva Freitas

This repository contains my submission for the Jones Automation recruitment exercise.

## Project Overview

The submission covers the following tasks:

- **Web Automation:** Automate the form submission flow on the provided website using Playwright.
- **Screenshot Capture:** Capture a full-page screenshot before submitting the form.
- **Form Submission:** Fill in the required fields, select the requested employee range, and submit the form.
- **Confirmation:** Wait for the thank-you page and log a confirmation message.
- **Billing UI Analysis:** Review the provided billing interface, identify potential issues, define sample test cases, and propose a solution for the most severe issue.

## Technologies Used

- JavaScript
- Node.js
- Playwright
- Chromium

## Prerequisites

Before running the automation, make sure you have installed:

- [Node.js](https://nodejs.org/) (including npm)
- Git, if you intend to clone this repository

## Installation

### 1. Clone the repository

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_FOLDER>
```

Replace the placeholders with the repository URL and folder name.

### 2. Install dependencies

```bash
npm ci
```

### 3. Install the Playwright browser

If Chromium is not already installed for the project's Playwright version, run:

```bash
npx playwright install chromium
```

On Linux environments that require additional system dependencies, you may need:

```bash
npx playwright install --with-deps chromium
```

## Running the Automation

Run the script with:

```bash
node automation.js
```

The browser opens in headed mode, navigates to the target website, fills in the form, selects the employee range of `51-500`, and captures a screenshot before submitting the form.

After clicking **Request a call back**, the script waits for the thank-you page and logs a confirmation message to the console.

Expected console output:

```text
Form submitted successfully!
```

## Screenshot

The automation saves the full-page screenshot before form submission at:

```text
screenShots/print.png
```

Make sure the `screenShots` directory exists before running the script.

## Billing UI Analysis

The billing UI analysis is included in the exercise document submitted with this repository. It covers potential usability, functional, security, and reliability concerns, along with sample test cases and a proposed solution to prevent duplicate payment submissions.

## Notes

- The automation uses example form data for demonstration purposes.
- The script relies on the target website and its form structure being available.
- The `node_modules` directory is excluded from version control. Dependencies can be installed using `npm ci`.

