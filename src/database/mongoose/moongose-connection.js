const mongoose = require('mongoose');

const connectDB = async () => {
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

module.exports = {connectDB: connectDB}
