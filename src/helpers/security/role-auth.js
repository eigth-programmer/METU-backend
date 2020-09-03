const {RoleController} = require('../../entities/role/infraestructure/role-controller');
const {UserController} = require('../../entities/user/infraestructure/user-controller');

const roleController = new RoleController();
const userController = new UserController();

/** Function responsible for checkin authorization **/
module.exports = (req, res, next) => {
    userController
        .getByEmail(req.body.email)
        .then(user => {
            if(!user) {return res.status(404).json({msg: 'Auth failed'})}
            let userRole = user.role;

            roleController
                .get(userRole)
                .then(role => {
                    if(role.name === 'admin'){ next() }
                    else { return res.status(403).json({msg: 'Not authorized'})}
                })
                .catch(err => {
                    console.log('Error on role-auth role', err);
                    return res.status(500).json({msg: 'Auth failed'})
                })

        })
        .catch(err => {
            console.log('Error on role-auth user by email', err);
            return res.status(500).json({msg: 'Auth failed'})
        })
}