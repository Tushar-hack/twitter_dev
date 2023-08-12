class CRUDRepository {
    constructor (model) {
        this.model = model;
    }

    async create (data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('Something Went wrong at repository Layer');
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('Something Went wrong at repository Layer');
        }
    }

    async update(id , data) {
        try {
            const response = await this.model.findByIdAndUpdate(id , data, {new : true});
            return response;
        } catch (error) {
            console.log('Something Went wrong at repository Layer');
        }
    }

    async destroy (id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('Something Went wrong at repository Layer');
        }
    }

    async getAll () {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log('Something Went wrong at repository Layer');
        }
    }
}

export default CRUDRepository;