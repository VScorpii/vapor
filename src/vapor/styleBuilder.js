const styleBuilder = () => {
    const stylesheet = {
        colors : require('../config/colors.json'),
        fonts  : require('../config/fonts.json'),
        footer : require('../config/footer.json'),
        header : require('../config/header.json')
    };
    const stylesheetJSONToDOMCSS = (stylesheetJSON) => {
        //...
    }
};

export default styleBuilder;