const { Videos }          = require('../models');
const authService       = require('../services/auth.service');
const { to, ReE, ReS }  = require('../services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.nome || !body.date || !body.url_video || !body.categories){
        return ReE(res, 'Please verify your json, some data is missing');
    }else{
        let err, video;
        video = Videos.create(req.body)

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new user.', video}, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    Videos.find({where:{id:}})
    return ReS(res, {user:user.toWeb()});
}
module.exports.get = get;

const getAll = async function(req, res){
    let videos_response;
    Videos.findAll().then(videos => {
      console.log('videos', videos);
      videos_response = videos;
    })
    return ReS(res, videos_response.dataValues, 200);
}
module.exports.getAll = getAll;

const update = async function(req, res){
    let err, data
    data = req.body;
    // TODO update
    if(err){
        if(err.message=='Validation error') err = 'The email address or phone number is already in use';
        return ReE(res, err);
    }
    return ReS(res, {message :'Updated User: '+user.email});
}
module.exports.update = update;

const remove = async function(req, res){
    let err;
    //TODO DELETE
    if(err) return ReE(res, 'error occured trying to delete user');

    return ReS(res, {message:'Deleted User'}, 204);
}
module.exports.remove = remove;


const login = async function(req, res){
    const body = req.body;
    let err, user;

    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:user.getJWT(), user:user.toWeb()});
}
module.exports.login = login;
