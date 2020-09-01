const {UserController} = require("../../entities/user/infraestructure/user-controller");
const {RoleController} = require( "../../entities/role/infraestructure/role-controller");

module.exports = (req, res, next) => {
    UserController.getUserByEmail(req.body.email)
        .then( user => {
            if(!user) {return res.status(401).json({msg: 'Auth failed'})}
            else if(user.role === RoleController.get('admin')){ next();}
            else { return res.status(401).json({msg: 'Access not authorised'})}
        }).catch( err => {
            return res.status(500).json({msg: 'Auth failed'})
    })
}