#! /usr/bin/env node
import { simpleGit, CleanOptions } from "simple-git";
import chalk from "chalk";

const git = simpleGit().clean(CleanOptions.FORCE);

const repoUrl = "https://github.com/scaffold-eth/se-2/";

// ToDo. Get from command line (use commander)
const directory = "/home/carletex/repo";

// ToDo. Check NodeJS version >= 18
// ToDo. Check that yarn is installed

try {
    await git.clone(repoUrl, directory);
    console.log(chalk.green(`Repository cloned to ${directory}`));
} catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
}

// const simpleGit = require('simple-git');
// const { spawn } = require('child_process');
// const chalk = require('chalk');
// const program = require('commander');