import {UserController} from "../../entities/user/infraestructure/user-controller";
import {RoleController} from "../../entities/role/infraestructure/role-controller";
const userController = new UserController();
const roleController = new RoleController();

module.exports = (req, res, next) => {
    userController.get(req.body.id)
        .then( user => {
            if(!user) {return res.status(401).json({msg: 'Auth failed'})}
            else if(user.role === roleController.get('admin')){ next();}
            else { return res.status(401).json({msg: 'Access not authorised'})}
        }).catch( err => {
            return res.status(500).json({msg: 'Auth failed'})
    })
}