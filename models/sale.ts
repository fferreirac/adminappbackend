import { Schema, Types, model } from "mongoose";

const saleSchema = new Schema({
    operation_date: Date,
    total_amount: Number, 
    user: {type: Types.ObjectId, ref: "User"}
})

const SaleModel = model("sale", saleSchema, "sales" );

export default SaleModel;