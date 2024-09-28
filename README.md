# github-actions-tutorial
Tutorial and notes on how to use github-actions and getting some hands on experience with CI/CD

## Setting up the CI/CD with Github Actions



1. Created the repo
2. Initialize npm and project. Created source and some tests.


### Setup Pre-commit Hooks:
Install Prettier, ESLint, and Husky.
```
npm install --save-dev prettier eslint husky lint-staged
```
Initialize ESLint
```
npx eslint --init
```
Configure Husky to enable Git hooks. Then configure to run the 'lint-staged' command, which we'll define later 
```
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

```





3. Create a `.github/workflows/deploy.yml`. Still stuck on that


# Credits:
1. [Automate your workflows with Github actions](https://www.youtube.com/watch?v=nyKZTKQS_EQ)

2. [ChatGPT Helps with CI/CD](https://chatgpt.com/c/66f36fc4-94e0-8001-8472-64b2ae868902)