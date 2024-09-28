# github-actions-tutorial
Tutorial and notes on how to use github-actions and getting some hands on experience with CI/CD

## Setting up the CI/CD with Github Actions
1. Created the repo
2. Initialize npm and project. Created source and some tests.


---

### Setting Up Pre-commit Hooks with ESLint and Prettier

The goal is to enforce consistent code formatting and styling using **Prettier** and **ESLint**, and to automatically run these checks before each commit using **Husky** and **lint-staged**.

---

### Step 1: Install Required Packages

1. **Prettier**: Automatically formats code to ensure consistent style. We recommend installing a specific version because Prettier updates may change the formatting rules. A commonly used version is `2.x`.
   **Command:**
   ```bash
   npm i -D --save-exact prettier@2.8.8
   ```
2. **ESLint**: Lints your code to identify formatting issues and other coding errors. We'll configure it to show warnings but not fix the issues automatically. If you want don't want to deal with `eslint.config.mjs` files and just json files, just 
    **Command:**
   ```bash
   npm i -D eslint@^7.32.0
   ```
3. **Husky**: Adds Git hooks for running checks automatically when you try to commit code.
4. **lint-staged**: Ensures that only staged files (the files you are committing) are checked by Prettier and ESLint.
5. **eslint-config-prettier**: Disables formatting-related rules in ESLint that might conflict with Prettier.
6. **@eslint/js**: Needed since you'll likely need to use some preset configurations.
   **Install Command:**
   ```bash
   npm i -D eslint husky lint-staged eslint-config-prettier @eslint/js 
   ```
---
### Step 2: Initialize ESLint and Husky
1. **Initialize ESLint**: Set up a basic configuration for ESLint.
   ```bash
   npx eslint --init
   ```
   Follow the prompts to configure ESLint. Make sure to choose "JSON" or "JavaScript" format for the configuration file, and select the option to integrate with Prettier.

2. **Configure Husky**: Initialize Husky and set up a pre-commit hook that runs `lint-staged` before committing.
   ```bash
   npx husky install  # Initializes Husky
   ```

3. **Add a Pre-commit Hook**: Create a pre-commit hook that runs `lint-staged` when you try to commit.
   ```
   npx husky add .husky/pre-commit "npx lint-staged"
   ```
   This creates a `.husky` directory and adds a pre-commit hook.
---
### Step 3: Configure `package.json` for Linting and Formatting
To ensure that only staged files are linted and formatted before committing, configure **lint-staged** pre-commit hook in `package.json`:

```json
{
  "lint-staged": {
    "*.js": [
      "eslint",           
      "prettier --write", 
    ]
  }
}
```

- **Prettier**: Ensures consistent formatting by automatically applying its rules to staged `.js` files.
- **ESLint**: Lints your code, showing warnings and errors but without auto-fixing. You’ll be responsible for fixing the linting issues yourself.
- **`git add`**: Re-stages any modified files so that the changes made by Prettier are included in the commit. Though this can sometimes cause errors

- **Okay let's review:**
  1. We defined pre-commit hook called `lint-staged` in `.husky/pre-commit`. 
  2. Configure `lint-staged` pre-commit hook in package.json.

- **One final note:**: Notice that we still have tests and lint-staged run when we push our files. Developers can accidentally bypass hooks, have merge conflicts and history, or local environment differences. The CI/CD is the last line of defense. 

---

### Step 4: Integrate Eslint and Prettier
We installed `eslint-config-prettier` earlier and that's all we should need. Just add `prettier` as the final string to the `extends` array. This turns off all eslint rules that conflicts with prettier.

However your custom rules in your `rules` object could still mess things up. So prettier has a command called `npx eslint-config-prettier path_to_my_file.js`. This helps identify the manual rules that you created.

### Step 5: Verify your setup
`npm run lint` on your files.

---
### Summary
1. **Prettier**: Formats your code automatically to enforce consistent style.
2. **ESLint**: Warns you about code issues but does not auto-fix them, leaving the responsibility to you.
3. **Husky**: Adds a Git pre-commit hook to run `lint-staged` before each commit.
4. **lint-staged**: Ensures that only the files you are committing are checked by ESLint and Prettier.
By using these tools together, you'll ensure your code is both linted and formatted correctly, preventing bad code from being committed.
 

# Credits:
1. [Automate your workflows with Github actions](https://www.youtube.com/watch?v=nyKZTKQS_EQ)
2. [Review on how to use Prettier and Eslint](https://www.youtube.com/watch?v=DqfQ4DPnRqI&t=595s)