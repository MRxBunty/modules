// main.ts

import chalk from 'chalk';

export function greet(name: string): string {
    const Names = chalk.greenBright.bgRed.bold(name); 
    return `Hello, ${Names} you are selected in 2nd Quarter!`;
}
