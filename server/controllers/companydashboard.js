import CompanyDashboard from '../models/companydashboard.js';

  export const getDetails = async (req, res, next) => {
    const details = await CompanyDashboard.find();
    res.status(200).json({ success: true, data: details });

};
export const createDetails = async (req, res, next) => {
    const details = await CompanyDashboard.create(req.body);
    res.status(201).json({
        success: true,
        data: details
    });

};
