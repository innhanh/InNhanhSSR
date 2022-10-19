'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const Branchs = require("./branchs");
const Carousels = require("./carousels");
const Categorys = require("./categorys");
const Companys = require("./companys");
const Images = require("./images");
const Links = require("./links");
const Maintenances = require("./maintenances");
const Pages = require("./pages");
const Productions = require("./productions");
const Texts = require("./texts");
const Users = require("./users");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Branchs = Branchs(sequelize, Sequelize);
db.Carousels = Carousels(sequelize, Sequelize);
db.Categorys = Categorys(sequelize, Sequelize);
db.Companys = Companys(sequelize, Sequelize);
db.Images = Images(sequelize, Sequelize);
db.Links = Links(sequelize, Sequelize);
db.Maintenances = Maintenances(sequelize, Sequelize);
db.Pages = Pages(sequelize, Sequelize);
db.Productions = Productions(sequelize, Sequelize);
db.Users = Users(sequelize, Sequelize);
db.Texts = Texts(sequelize, Sequelize);

module.exports = db;
