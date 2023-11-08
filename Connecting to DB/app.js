const {MongoClient}=require('mongodb')//importing monogo db driver
const uri= require("./atlas_uri")//importing connection string
console.log(uri)

const client=new MongoClient(uri)//Connecting Mongo Db driver to connection string
const dbname="Project 0"//database name

const connectToDatabase = async()=>{
    try{
       await client.connect();//Connecting to Database
       console.log('Connected to the ${dbname} database');
    }
    catch(err){
       console.error('Error connecting to the database:${errz}');
    }
};

const main= async()=>{
    try{
      await connectToDatabase();        
    } catch(err){
        console.error('Error connecting to the database:${err}');
    } finally{
        await client.close();
    }
};

main();
