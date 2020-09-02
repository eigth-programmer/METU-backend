const mongoose = require('mongoose');

module.exports = async function connectDB(){
    try {
        const conn = await mongoose
            .connect(process.env.DB_URI,
                { useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
        console.log('Connected to MongoDB database', conn.connection.host);
    } catch (err) {
        console.log('Error connecting to MongoDB database', err);
        process.exit(1);
    }
}
