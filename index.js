// get the instance of sequelize
const {
    connection,
    Restaurant,
    Menu,
    MenuItem,
  } = require('./sequelize-connect');
  const express = require('express');
  const app = express();
  const port = 1123;
  
  // support req.body parsing
  app.use(express.json());



  ////////////// restaurant section //////////////
  app.post('/api/restaurants', async (req, res) => {
    try {
      // create a row in the database using sequelize create method
      const restaurant = await Restaurant.create(req.body);
      res.status(201).send(restaurant);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
  
  app.get('/api/restaurants', async (req, res) => {
    try {
      // find all the restaurants in Restaurant table
      const restaurants = await Restaurant.findAll({});
      res.status(200).send(restaurants);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

   // find one restaurant
   app.get('/api/restaurants/:id', async (req, res) => {
    try{
      const restaurant = await Restaurant.findAll({ where: { id: req.params.id } })
      res.status(205).send(restaurant);
     } catch (e) {
        res.status(400).send(e.message);
      }
  });

  // delete a restaurant using restaurant_id
  app.delete('/api/restaurants/:id', async (req, res) => {
    try{
    const toDelete = await Restaurant.findByPk(req.params.id)
    await toDelete.destroy()  
        res.status(202).send(toDelete)
      } catch (e) {
        res.status(400).send(e.message);
      }
  })

  // update a restaurant using restaurant_id
  app.put('/api/restaurants/:id', async (req, res) => {
    try{
    const toUpdate = await Restaurant.findByPk(req.params.id)
    await toUpdate.update(req.body)  
        res.status(203).send(toUpdate);
      } catch (e) {
        res.status(400).send(e.message);
      }
  })




  // ///////// menus section ///////////

     ///////////// find all menu
     app.get('/api/menus', async (req, res) => {
      try {
        const menu = await Menu.findAll({});
        res.status(205).send(menu);
       } catch (e) {
          res.status(400).send(e.message);
        }
    });

    // find one menu
    app.get('/api/menus/:id', async (req, res) => {
      try{
        const menu = await Menu.findAll({ where: { id: req.params.id } })
        res.status(205).send(menu);
       } catch (e) {
          res.status(400).send(e.message);
        }
    });

  // create a new menu
  app.post('/api/menus', async (req, res) => {
    try {
      const menu = await Menu.create(req.body);
      res.status(201).send(menu);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

   // update a menu using menu_id
   app.put('/api/menus/:id', async (req, res) => {
    try{
    const toUpdate = await Restaurant.findByPk(req.params.id)
    await toUpdate.update(req.body)  
        res.status(203).send(toUpdate);
      } catch (e) {
        res.status(400).send(e.message);
      }
  })

  ///// delete a menu by menu_id
  app.delete('/api/menus/:id', async (req, res) => {
    try{
    const toDelete = await Menu.findByPk(req.params.id)
    await toDelete.destroy()  
        res.status(202).send(toDelete)
      } catch (e) {
        res.status(400).send(e.message);
      }
  })



  //////////////menuItems section/////////////


    ///////////// find all menuItens
  app.get('/api/menuItems', async (req, res) => {
    try {
      const menuItems = await MenuItem.findAll({});
      res.status(205).send(menuItems);
     } catch (e) {
        res.status(400).send(e.message);
      }
  });

  // find one menu item
  app.get('/api/menuItems/:id', async (req, res) => {
    try{
      const menuItem = await MenuItem.findAll({ where: { id: req.params.id } })
      res.status(205).send(menuItem);
     } catch (e) {
        res.status(400).send(e.message);
      }
  });
     // create a new menuItem
  app.post('/api/menuItems', async (req, res) => {
    try {
      const menuItems = await MenuItem.create(req.body);
      res.status(201).send(menuItems);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


   // update a menuItem using menuItem_id
   app.put('/api/menuItems/:id', async (req, res) => {
    try{
    const toUpdate = await Restaurant.findByPk(req.params.id)
    await toUpdate.update(req.body)  
        res.status(203).send(toUpdate);
      } catch (e) {
        res.status(400).send(e.message);
      }
  })


  ///////// delete a menuItem by menuItem_ID
  app.delete('/api/menuItems/:id', async (req, res) => {
    try{
    const toDelete = await Menu.findByPk(req.params.id)
    await toDelete.destroy()  
        res.status(202).send(toDelete)
      } catch (e) {
        res.status(400).send(e.message);
      }
  })
  // 1. create an endpoint that will delete a restaurant by ID (HTTP Method = delete)
  
  // 2. create an endpoint that will update a restaurant by ID (HTTP Method = put)
  
  // 3. create a suite of menu and menu item routes that will CRUD each resource
  
  // 4. find a way to relate the menu items to the menu and the menu to the restaurant
  
  // 5. use Sequelize validation to validate the data being sent (you'll do this in the model)


  
  /**
   * Synchronize all models with db
   */
  async function start() {
    await connection.sync({
      logging: false, // don't log everything
      // force: true, // drop tables each time
    });
  }
  
  // run start and log any errors
  start()
    .then(() => console.log('Sequelize connected'))
    .catch((e) => console.log(`Caught error: ${e}`));
  
  app.listen(port, () => console.log(`Express server running on port ${port}`));
///what happen next