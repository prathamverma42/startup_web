import Home from '../models/home.js';

  export const getHome = async (req, res, next) => {
    const home = await Home.find();
    res.status(200).json({ success: true, data: home });

};
export const createHome = async (req, res, next) => {
    const home = await Home.create(req.body);
    res.status(201).json({
        success: true,
        data: home
    });

};
