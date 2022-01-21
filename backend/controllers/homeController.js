const { BrandCar } = require('../db/models');

exports.getCarBrand = async (req, res) => {
  try {
    const brandcars = await BrandCar.findAll(
      { attributes: ['name'] });
    res.send( brandcars );
  } catch (error) {
    console.log(error.message);
  }
};
