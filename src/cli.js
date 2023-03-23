#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { simpleGit, CleanOptions } from "simple-git";

const repoUrl = "https://github.com/carletex/se-2/";
const git = simpleGit().clean(CleanOptions.FORCE);

// ToDo. Check NodeJS version >= 18
// ToDo. Check that yarn is installed

inquirer
  .prompt([
    {
      type: "input",
      name: "directory",
      message: "In which directory do you want to install SE-2?",
      default: "se-2",
    },
  ])
  .then(async (answers) => {
    const directory = answers.directory;

    // ToDo. Spinner
    console.log(chalk.green(`Cloning SE2 to ${directory}...`));
    await git.clone(repoUrl, directory);
    console.log(chalk.green(`Repository cloned to ${directory}`));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("CLI Error:", error);
    }
  });
