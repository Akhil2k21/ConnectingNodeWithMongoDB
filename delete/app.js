const {MongoClient,ObjectId}=require('mongodb')//importing monogo db driver
const uri= require("./atlas_uri")//importing connection string
console.log(uri)

const client=new MongoClient(uri)//Connecting Mongo Db driver to connection string
const dbname="MDB_EDU"//database name

const collection_name="items";
const accountsCollection= client.db("MDB_EDU").collection("items");

const connectToDatabase = async()=>{
    try{
       await client.connect();//Connecting to Database
       console.log('Connected to the ${dbname} database');
    }
    catch(err){
       console.error('Error connecting to the database:${errz}');
    }
};


const sampleAccounts=[
    {
    account_holder:"Linus Torvalds",
    account_id:"MDB829001337",
    account_type:"checking",
    balance:58352434,
    last_updated:new Date(),
    },
    {
        account_id:"MDB011235813",
        account_holder:"Ada Lovelace",
        account_type:"checking",
        balance:60218,
    }


]


const main= async()=>{
    try{
      await connectToDatabase();
    //   let result= await accountsCollection.insertMany(sampleAccount)
    let result=await accountsCollection.deleteOne({
        _id:new ObjectId('65293a1496ad776f5842d033')})
      console.log(result);

      if(result.deletedCount==1)
      {
        console.log('One Document deleted');
      }
    } catch(err){
        console.error('Error connecting to the database:${err}');
    } finally{
        await client.close();
    }
};

main();
