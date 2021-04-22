import mongoose from 'mongoose';

const userDashboardSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true,'Please add a name']
    },
    fieldOfExpertise: {
        type: String,
        required : [true,'Please add your branch']
    },
    educationDetails: {
        type: [],
        year:{
            type:String,
            required: [true]
        },
        degree: {
            type: String,
            required: [true]
        },
        institution: {
            type: String,
            required: [true]
        },
        cgpa: {
            type: String,
            required: [true]
        },
        programmingLanguages: {
            type: [],
            progLang: {
                type: String,
                required: [true]
            },
            rating: {
                type: Number,
                required: [true]
            }
        },
        techSkills: {
            type: [String],
            required: true
        },
        nonTechSkills: {
            type: [String],
            required: true
        },
        description: {
            type: String
        }
    }
})

const userDashboard= mongoose.model('UserDashboard',userDashboardSchema);
export default userDashboard; 