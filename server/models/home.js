import mongoose from 'mongoose';

const homeSchema = mongoose.Schema({
    companyDetails: {
        title: {
            type: String,
            required : [true,'Please add Post available for hiring']
        },
        subtitle: {
            type: String,
            required : [true,'Please add Company Name']
        },
        img: {
            type: String,
            required: [true,'Please add logo']
        },
    },
    internshipDetails: {
        location: {
            type: String,
            required: [true,'Please add location of the work']
        },
        aboutCompany: {
            type: String,
            required: [true]
        },
        responsibilities: {
            type: String,
            required:[true]
        },
        skillsRequired: {
            type: String
            
        },
        perks: {
            type: String,
            required:[true]
        }
    }
})

const Home= mongoose.model('Home',homeSchema);
export default Home;