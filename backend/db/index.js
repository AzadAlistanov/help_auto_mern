const { sequelize } = require('./models');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connected!');
  } catch (e) {
    console.error('Happened mistake connection with DB, mistake: %O', e);
  }
}

module.exports = { connect };
