# Spark Automate 2 — Playwright E2E Tests 🔬

A lightweight Playwright-based end-to-end test suite for the Spark Automate project. Tests are written in JavaScript and follow a page-object structure to keep selectors and actions organized for maintainability and reusability.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** >= 18
- **npm** (bundled with Node.js)

### Install
```bash
# Clone the repo
git clone <your-repository-url>
cd Automate_2

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

All test runs use Playwright directly (see `package.json`):

- Run the full suite (headless):
  ```bash
  npm test
  # or
  npx playwright test
  ```

- Run in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Open the Playwright UI runner:
  ```bash
  npx playwright test --ui
  ```

- Run a single test file:
  ```bash
  npx playwright test tests/automate.spec.js
  ```

- Debugging (slower, interactive):
  ```bash
  npx playwright test --debug
  ```

---

## 📊 Reports & Artifacts

- After a run, generate/open the HTML report:
  ```bash
  npx playwright show-report
  ```
- When tests fail, Playwright can capture **screenshots**, **videos**, and **traces** to help diagnose issues. These are stored in `playwright-report/` and `test-results/` (when enabled).

---

## 📁 Project Structure (key files)

- `tests/` — test specs (e.g. `automate.spec.js`)
- `pageObject/` — page objects (`loginPage.po.js`, `securePage.po.js`) and feature helpers
- `resources/data/` — test data (e.g. `testData.json`)
- `resources/locators/` — JSON locator files used by page objects
- `playwright.config.js` — Playwright configuration
- `package.json` — scripts and dependencies
- `playwright-report/` — generated test reports

---

## 🛠 Development Tips

- Use the Playwright Codegen to scaffold interactions:
  ```bash
  npx playwright codegen <url>
  ```
- Enable tracing for flaky tests and use the trace viewer:
  ```bash
  npx playwright test --trace on
  ```

---

## Contributing

- Keep tests deterministic and avoid relying on external state when possible.
- Add or update `resources/data/*` when creating new test scenarios.
- Open a PR with a clear description and test evidence (screenshots/traces) for failures.

---

## Troubleshooting

> If Playwright complains about missing browsers, run `npx playwright install` and re-run your tests.

If tests time out, check selectors in `resources/locators/` and ensure the test data in `resources/data/` is correct.

---

## Environment variables

This project requires a **REQRES_API_KEY** for requests to the ReqRes test API. Provide it in a `.env` file at the repository root with the following format:

```env
REQRES_API_KEY=your_reqres_api_key_here
```

- Do **not** commit real secrets to the repository. Add `.env` to your `.gitignore` if it is not already ignored.
- If you don't have an API key, request one from the service owner or use a test/stub value for local runs.

---

## License

This project is provided under the **ISC** license. Update `package.json` and this file with your preferred license and author metadata.

---

If you'd like, I can also add a short CONTRIBUTING.md or update `package.json` scripts (for example, add `test:headed` or `report:open`). Just tell me which changes you want. ✅
