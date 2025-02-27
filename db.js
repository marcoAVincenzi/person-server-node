const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://marcoantoniovincenzi:112233445566778899@cluster0.ymbhi.mongodb.net/person_db?retryWrites=true&w=majority&appName=Cluster0';

const connectionDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connection successful');
    } catch (err) {
        console.error('DB connection error:', err);
    }
};

module.exports = connectionDB;
