const fs = require('fs');
const path = require('path');

const fileSystemWrapper = () => {
    const dir = {
        config : path.join(__dirname, '../config/'),
        assets : path.join(__dirname, '../assets/'),
        static : path.join(__dirname, '../static/'),
        pages : path.join(__dirname, '../pages/'),
        requiredList : require("./required.json"),
        requiredListLenght : (requiredList["directories"].length + requiredList["files"].length)
    };
    
    const checkFileSystem = () => {
        let allPaths = requiredList["directories"].concat(requiredList["files"]);
        let errCheckout = 0;
        allPaths.forEach( (path) => {
            if ( !fs.existsSync(path) ) {
                throw `O caminho/arquivo ${path} não existe ou não é acessível.`;
                errCheckout++;
            }
        });
        return (errCheckout > 0) ? true : false;
    };
};
export default fileSystemWrapper;