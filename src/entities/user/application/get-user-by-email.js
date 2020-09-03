module.exports = (email, repository) => {
    return repository.getByEmail(email);
}