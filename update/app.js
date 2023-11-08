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



const documentToUpdate={
 
    "_id":new ObjectId('652939428020d7419f1b191c')  

}
const update={
    
"account_holder":"Thomas Alva Edison"
}

const main= async()=>{
    try{
      await connectToDatabase();
    //   let result= await accountsCollection.insertMany(sampleAccount)
    const result= await accountsCollection.findOneAndUpdate({_id:new ObjectId('652939428020d7419f1b191c')},{$set:{account_holder:"Thomas Alva Edison"}})
    console.log(`Updated Document:${JSON.stringify(result)} documents`)

      if(result.modifiedCount==1)
      {
        console.log('One Document Updated');
      }
    } catch(err){
        console.error('Error connecting to the database:${err}');
    } finally{
        await client.close();
    }
};

main();
