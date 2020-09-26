const createUser = require('../application/create-user');
const updateUser = require('../application/update-user');
const deleteUser = require('../application/delete-user');
const getUserByEmail = require('../application/get-user-by-email');
const {UserMongoRepository} = require("./user-mongo-repository");
const repository = new UserMongoRepository();

const existsUser = async (mail) => {
    try {
        return await getUserByEmail(mail, repository);
    } catch (err) {
        throw new Error(err);
    }
}

const create = async(user) => {
    try{
        return await createUser(user, repository);
    } catch (err) {
        throw new Error(err);
    }
}

const update = async(req, res) => {
    const {id} = req.params.id;
    const {username, email, password, role} = req.body;
    try {
        const user = await updateUser({id: id, username: username, email:email, password: password}, repository);
        return res.status(200).json({user: user});
    } catch (err) {
        return res.status(500).json({msg: 'Could not update user'});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;
    try {
        await deleteUser(id, repository);
        return res.status(200).json({msg: 'success'});
    } catch(error) {
        return res.status(500).json({msg: 'Could not delete user'});
    }
}

const getByMail = async(req, res) => {
    const {mail} = req.body;
    try {
        const user = await getUserByEmail(mail, repository);
        if(!user) {return res.status(404).json({msg: 'User not found'})}

        return res.status(200).json({user: user})
    } catch (err) {
        return res.status(500).json({error: 'Could not retrieve user'})
    }
}

module.exports = {create: create, update: update, remove: remove, getByMail: getByMail, existsUser: existsUser}
