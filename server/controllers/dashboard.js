import dashboard from '../models/dashboard.js';

export const getPost = async (req,res) => {
    // res.send("hello get request");
    const data = req.body;
    const newdashboard = new dashboard(data);
    await newdashboard.save();
    res.status(200).json(newdashboard); 
}

export const createPost = async (req,res) => {
    res.send("hello post request");
}