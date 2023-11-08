const {MongoClient,ObjectId}=require('mongodb')//importing monogo db driver
// const {Types}= require('mongoose')
const uri= require("./atlas_uri")//importing connection string
console.log(uri)
let db  = uri
const client=new MongoClient(uri)//Connecting Mongo Db driver to connection string
const dbname="MDB_EDU"//database name

const collection_name="items";
const accountsCollection= client.db("MDB_EDU").collection("items");
    

const connectToDatabase = async()=>{
    try{
       await client.connect();//Connecting to Database
       console.log(`Connected to the ${dbname} database`);
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
const documentid={
    "id":"ObjectId('65293a1496ad776f5842d032')"
}
const document={
    
"account_type":"checking"
}

const main= async()=>{
    try{
      await connectToDatabase();
    //   let result= await accountsCollection.insertMany(sampleAccount)
    const result= await accountsCollection.findOne({_id:new ObjectId('652931a03ba73f5c4e209601')})
      console.log(`Inserted document:${JSON.stringify(result)} documents`)
      console.log("Hello World");
    } catch(err){
        console.log(err)
        console.error('Error connecting to the database:${err}');
    } finally{
        await client.close();
    }
};

main();
