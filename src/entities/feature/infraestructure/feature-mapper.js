const {Feature} = require("../domain/feature");

const mapTo = (dbFeature) => {
    const {id, name, unit} = dbFeature;

    return new Feature(id, name, unit);
}

module.exports = {mapTo: mapTo}
