import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
   companyName: {
       type: String,
       required: [true,'Please add a company name']
   },
   emailAddress: {
       type: String,
       required: [true,'Please add an email address']
   },
   contactNumber: {
    type: Number,
    required: [true,'Please add a contact number']
   },
   college : {
     type: String,
     required: [true,'Please add college name']
   },
   companyLocation: {
       type: String,
       required: [true,'Please add the location']
   },  
   password: {
       type: String,
       required: [true]
   }, 
   idProof: {
       type: String,
       required: [true,'Please link an id-proof']
   }
});

const CompanyDashboard= mongoose.model('Company',companySchema);
export default CompanyDashboard;