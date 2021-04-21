import InternShips from '../models/internship.js';

  export const getInternships = async (req, res, next) => {
    const internship = await InternShips.find();
    res.status(200).json({ success: true, data: internship });

};
export const createInternship = async (req, res, next) => {
    const internship = await InternShips.create(req.body);
    res.status(201).json({
        success: true,
        data: internship
    });

};
