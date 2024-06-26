const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        // When we create a new record in a collection, we will be assigned an ID and it is called ObjectID which will be created automatically
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
});

module.exports = mongoose.model('Project', ProjectSchema);