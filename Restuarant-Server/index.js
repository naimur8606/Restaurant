const express = require('express');
const cors = require("cors");
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kc6dmnx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allRecipes = client.db("Restaurant").collection("Recipes");
    const allReviews = client.db("Restaurant").collection("Reviews");
    const allUsers = client.db('Restaurant').collection('users');
    const allUsersCart = client.db('Restaurant').collection('usersCart');


    app.get("/Recipes", async (req, res) => {
      const result = await allRecipes.find().toArray();
      res.send(result);
    })
    app.get("/Recipes/:category", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      if (req.params.category === 'all') {
        const result = await allRecipes.find().skip(page * size).limit(size).toArray();
        res.send(result);
      } else {
        const query = { category: req.params.category };
        const result = await allRecipes.find(query).skip(page * size).limit(size).toArray();
        res.send(result);
      }
    })

    app.get("/Reviews", async (req, res) => {
      const result = await allReviews.find().toArray();
      res.send(result);
    })

    app.get('/RecipesCount/:category', async (req, res) => {
      const query = { category: req.params.category };
      if (req.params.category === 'all') {
        const count = await allRecipes.estimatedDocumentCount();
      res.send( {count} );
      } else {
        const count = await allRecipes.countDocuments(query)
      res.send( {count} );
      }
    })

    app.post("/users", async (req, res) => {
      const users = req.body;
      const result = await allUsers.insertOne(users);
      console.log(result)
      res.send(result)
    })

    app.get("/users", async (req, res) => {
      const result = await allUsers.find().toArray();
      res.send(result);
    })

    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await allUsersCart.insertOne(cartItem);
      res.send(result)
    })

    app.get("/carts", async (req, res) => {
      const query = {email : req.query.email}
      const result = await allUsersCart.find(query).toArray();
      res.send(result);
    })

    app.get("/carts/:email", async (req, res) => {
      const query = { email: req.params.email }
      const result = await allUsersCart.find(query).toArray();
      res.send(result);
    })

    app.delete("/carts/:id", async( req, res)=>{
      const id = req.params.id;
      const query ={ _id: new ObjectId(id)}
      const result = await allUsersCart.deleteOne(query);
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Restaurant is open...')
})

app.listen(port, () => {
  console.log(`Restaurant is open on port ${port}`)
})