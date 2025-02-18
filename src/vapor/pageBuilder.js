import {  } from "./styleBuilder.js";
import { marked } from "marked";

const pageBuilder = () => {
    const header = (config, homelink) => 
    /*html*/`
    <header>
    </header>
    `;
    const footer = (config, homelink) =>
    /*html*/`
    <footer>
    </footer>
    `;
    const template = (title, stylesheet, header, footer, content) => 
   /*html*/`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        ${stylesheet}
    </head>
    <body>
        ${header}
        <div class="content">${content}</div>
        ${footer}
    </body>
    </html>`;

    const buildMain = () => {

    };

    const buildIndex = () => {
        
    }

 };

export default pageBuilder;