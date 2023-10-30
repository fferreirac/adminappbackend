import mongoose from 'mongoose';
import ProductModel from '../models/product';

async function connectDB() {

    if(!process.env.MONGODB_URL){
        throw new Error('la variable de entorno MONGOOSE_URL');        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);    
        console.log('ya me conecte a mongoose!');
        // creando productos
        // await ProductModel.create({
        //     name: "IMpresora",
        //     code: "EPSONMDF02",
        //     supplier_cost: 100,
        // })
        //await SaleModel.create({ operation_date: new Date(), user: "653235883546f95941ff24eb", total_amount: 5000})
        // //UserModel.create()
        // const newUser = new UserModel({
        //    firstName: "Francisco",
        //    lastName: "Ferreira",
        //    email: "ferreiradeveloper@gmail.com",
        //    login_code: "6269970",
        //    roles: {
        //     admin: true,
        //     seller: true
        //    }
        // });
        // console.log({newUser});
        // await newUser.save();
    } catch (error) {
        console.log('error al conectarnos a mongo',error)
    }
    
}

export default connectDB;
