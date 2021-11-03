// get the seq package
const Sequelize = require('sequelize');
const { check, validationResult } = require('express-validator');

// model = outline of the data we'll store against an entity
const restaurantModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull:false,
    validate: {
      notNull: "Oh no, where is your restaurant name?"
  
      
    },
  },
  imagelink: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    }
  },
};

const menuModel = {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  restaurantId:  {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
};

const menuItemModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT, // may end up as "REAL" in sqlite
    validate: {
      allowNull: false,
      isNumeric: true,
    }
  },
  menuId:{
    type: Sequelize.FLOAT,
    allowNull: false,
  }
};

////////////// validation for restaurant name
// app.post('/restaurants', [
//   check('name').not().isEmpty().trim().escape()
//   ], async (req, res) => {
//   const errors = validationResult(req)
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() })
//   }
//   })
  


module.exports = { restaurantModel, menuModel, menuItemModel };
