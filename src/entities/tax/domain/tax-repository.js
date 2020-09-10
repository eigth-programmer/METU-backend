class TaxRepository {
    create(tax){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    delete(id){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getList(params = {}) {
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = {TaxRepository: TaxRepository}