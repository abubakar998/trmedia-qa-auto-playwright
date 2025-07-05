# 🎭 Playwright Automation Project (UI + API) with TypeScript

This project showcases a complete end-to-end automation setup using [Microsoft Playwright](https://playwright.dev/) with TypeScript. It includes both **UI** and **API** testing, following the **Page Object Model** design pattern and best practices for scalable test automation.

## 📌 Features

- ✅ End-to-End UI Testing with Playwright
- 🔌 REST API Testing (Playwright + SuperTest or Fetch)
- 🧱 Page Object Model (POM) structure
- 📤 TypeScript-based codebase
- 🧪 Cross-browser testing (Chromium, Firefox, WebKit)
- 🐞 Parallel test execution
- 📸 Screenshots & trace viewer for debugging
- 📊 HTML Reports with Playwright Test
- 🔄 CI/CD Ready (GitHub Actions/Jenkins compatible)

---

## 📁 Project Structure

```
├── tests/                 # Test specs (UI + API)
│   ├── ui/                # UI test cases
│   └── api/               # API test cases
├── pages/                 # Page Object files
├── utilities/                 # Helper functions (e.g., API client, data generators)
├── fixtures/              # Test data and fixtures
├── playwright.config.ts   # Playwright configuration
├── package.json           # NPM scripts and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```



---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install

🛠️ Run All Tests
npx playwright test

🖥️ Run UI Tests in Headed Mode
npx playwright test tests/ui --headed

🧪 Run API Tests
npx playwright test tests/api

🌐 Run Specific Test File
npx playwright test tests/ui/ui.boards.spec.ts


| Script             | Description                 |
| ------------------ | --------------------------- |
| `npm run test`     | Run all tests               |
| `npm run test:ui`  | Run UI tests only           |
| `npm run test:api` | Run API tests only          |
| `npm run report`   | Open HTML report            |
| `npm run lint`     | Run ESLint for code quality |

🧰 Tech Stack
Playwright
TypeScript
Node.js
ESLint + Prettier

🙋‍♂️ Author
Abu Bakar
💼 [LinkedIn](https://www.linkedin.com/in/bakarbuet/)
📧 abubakarbulet@gmail.com

Let me know if you want to:
- Add CI/CD pipeline instructions (like GitHub Actions)
- Customize for a specific project
- Include video walkthrough or sample test case in README
