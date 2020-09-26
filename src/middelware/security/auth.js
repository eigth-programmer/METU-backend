const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserController = require('../../entities/user/infraestructure/user-controller');
const RoleController = require('../../entities/role/infraestructure/role-controller');

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const exists = await UserController.existsUser(email);
        if(!exists) {return res.status(401).json({msg: 'Login failed'})}
        const matched = await bcrypt.compare(password, exists.password);
        if(!matched) {return res.status(401).json({msg: 'Login failed'})}
        const token = jwt.sign(req.body.email, process.env.JWT_KEY);

        return res.status(200).json({msg:'Success', token: token});
    } catch (err) {
        return res.status(500).json({msg:'Could login user', error: err});
    }
}

const register = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const exists = await UserController.existsUser(email);
        if(exists) { return res.status(409).json({msg: 'This email is already used'})}
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const role = await RoleController.getByName('client');
        await UserController.create({username: username, email: email, password: hash, role: role.id});
        const token = jwt.sign(email, process.env.JWT_KEY);

        return res.status(200).json({msg:'Success', token: token});
    } catch (err) {
        return res.status(500).json({msg:'Could not register user', error: err});
    }
}

const isLogged = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    try {
        const isVerified = await jwt.verify(token, process.env.JWT_KEY);
        if(!isVerified) return res.status(401).json({msg:'Unauthorized'});
        next();
    } catch (err) {
        return res.status(500).json({msg:'Could not validate token'});
    }
}

const isAdmin = async (req, res, next) => {
    const email = req.headers["x-access-email"];

    try {
        const user = await UserController.existsUser(email);
        if(!user) {return res.status(404).json({msg: 'Could not validate permissions'})}
        const adminRole = await RoleController.getByName('admin');
        if(user.role.toString() !== adminRole.id) {return res.status(403).json({msg: 'Unauthorised'})}
        next();
    } catch (err) {
        return res.status(500).json({msg:'Could not validate permissions'});
    }
}

const hasPermission = async(req, res, next) => {
    const {email} = req.body;

    try {
        const user = await UserController.existsUser(email);
        if(!user) {return res.status(404).json({msg: 'Could not validate permissions'})}

        next();
    } catch (err) {
        return res.status(500).json({msg:'Could not validate permissions'});
    }
}

module.exports = {login: login, register: register, isLogged: isLogged, isAdmin: isAdmin}
