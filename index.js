const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


const uri =
  `mongodb+srv://${process.env.FS_USER}:${process.env.FS_PASS}@cluster0.baizo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const campaignCollection = client.db("campaignDB").collection("campaigns");
    const userCollection = client.db("campaignDB").collection("users");

    app.get("/campaigns", async (req, res) => {
      const cursor = campaignCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/runningCampaigns", async (req, res) => {
      const currentDate = new Date();
      const cursor = campaignCollection
        .find({ deadline: { $gte: currentDate.toISOString() } })
        .limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await campaignCollection.findOne(query);
      res.send(result);
    })

    app.post("/campaigns", async (req, res) => {
      const newCampaign = req.body;
      const result = await campaignCollection.insertOne(newCampaign);
      res.send(result)
    });


    // User Related API
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("Creating New User", user);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("FundSphere Server is Running");
});

app.listen(port, () => {
  console.log(`FundSphere Server is Running on Port: ${port}`);
});