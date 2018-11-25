'use strict';
const jwt	= require('jsonwebtoken');
const {TE, to} = require('../services/util.service');
const CONFIG = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Videos', {
        id     : {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
        nome      : DataTypes.STRING,
        date     : DataTypes.STRING,
        url_video     : DataTypes.STRING,
        categories  : DataTypes.STRING,
    });

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};
