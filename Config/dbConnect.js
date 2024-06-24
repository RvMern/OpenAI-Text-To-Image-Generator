// ! Loading Functionalities
import mongoose from 'mongoose';



// ! Creating Function To Database using Mongoose
const dbConnect = () => {
    mongoose.connect(process.env.LOCAL_MONGODB_URL)
    .then((data)=>{console.log(`Database has been connected successfully on ${data?.connection.host}:${data?.connection?.port}`);})
    .catch((err)=>{console.log(err.message);})
}

export default dbConnect;

