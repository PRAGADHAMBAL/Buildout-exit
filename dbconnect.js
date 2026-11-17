import mongoose from "mongoose"; 868.3k (gzipped:232.7k)
const uri="" //paste your uri here
export default mongoose.connect(uri).then(()=> {
    console.log("connected to mongodb");
});

