const { Service } = require('../db/models');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll(); // ({ attributes: ['name'] });
    res.json( services );
  } catch (error) {
    console.log(error.message);
  }
};
