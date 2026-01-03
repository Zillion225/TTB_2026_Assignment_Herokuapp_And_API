# Playwright Test Automation Framework

This repository contains an automated testing framework built with [Playwright](https://playwright.dev/) for end-to-end (E2E) and API testing. It is designed to be robust, maintainable, and easy to use.

The framework follows the **Page Object Model (POM)** design pattern, which encapsulates page-specific information and actions into separate classes. This improves test maintainability and reduces code duplication.

## Features

-   **E2E and API Testing:** Includes tests for both web UI and backend APIs.
-   **Page Object Model:** Organizes UI interactions and locators for better maintainability.
-   **Externalized Test Data:** Test data and UI locators are stored in `JSON` files, separating them from test logic.
-   **Environment Variable Support:** Uses `.env` files for managing sensitive data like API keys.
-   **HTML Reporting:** Generates detailed HTML reports with traces for easy debugging.

## Project Structure

```
.
├── pageObject/
│   ├── page/         # Page Object classes (e.g., loginPage.po.js)
│   └── feature/      # High-level feature wrappers (currently empty)
├── resources/
│   ├── data/         # Test data files (e.g., testData.json)
│   ├── locators/     # UI locators (e.g., loginPage.locator.json)
│   └── settings/     # Application settings (e.g., web.json)
├── tests/
│   ├── automate.spec.js     # UI test specifications
│   └── automate_api.spec.js # API test specifications
├── .env.example      # Example environment file
├── .gitignore
├── package.json
└── playwright.config.js
```

## Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   npm (included with Node.js)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd Automate_2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the project root by copying the `.env.example` file.

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with the necessary environment variables. For example:
    ```
    BASE_URL=https://the-internet.herokuapp.com
    API_URL=https://reqres.in/api
    ```

## Running the Tests

The framework provides several ways to run the tests:

-   **Run all tests:**
    ```bash
    npm test
    ```

-   **Run tests in headed mode (shows the browser):**
    ```bash
    npx playwright test --headed
    ```

-   **Run a specific test file:**
    ```bash
    npx playwright test tests/automate.spec.js
    ```

-   **Run tests in debug mode:**
    ```bash
    npx playwright test --debug
    ```

-   **Use the Playwright UI:**
    ```bash
    npx playwright test --ui
    ```

## Test Reports

After each test run, an HTML report is generated. You can view the latest report using the following command:

```bash
npx playwright show-report
```

The report provides a detailed overview of the test results, including screenshots, videos, and traces for failed tests.

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Create a new branch for your feature or bug fix.
2.  Add or update tests as needed.
3.  Ensure all tests pass before submitting a pull request.
4.  Follow the existing code style and conventions.