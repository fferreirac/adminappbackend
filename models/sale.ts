import { Schema, Types, model } from "mongoose";
import { productSchema } from "./product";

const paymentMethodsSchema = new Schema ({
    method: {type: String},
    amount: {type: Number, required: true},
    time_unit: {type: Number, required: true},
    time_value: {type: Number, required: true}
})

const saleSchema = new Schema({
    operation_date: Date,
    total_amount: Number, 
    products: [productSchema],
    payment_methods: [paymentMethodsSchema],
    user: {type: Types.ObjectId, ref: "User"},
    client: {type: Types.ObjectId, ref: "Client"}
})

const SaleModel = model("sale", saleSchema, "sales" );

export default SaleModel;