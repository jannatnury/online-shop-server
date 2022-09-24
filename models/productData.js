import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter product Name"] },
    details: { type: String, required: [true, "Please enter product Description"] },
    price: { type: Number, required: [true, "Please enter product Price"], maxLength: [5, "Price can not exceed 5 characters"] },
    stock: {
        type: Number,
        required: [true, "Please enter product Stock"],
        maxLength: [4, "Product stock can not exceed 4 cheracters"],
        default: 1
    },
    rating: { type: Number, default: 0 },
    image: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }
    ],
    category: {
        type: String, required: [true, "Please enter Product Cetegory"]
    }
    // review:[
    //     {
    //         name:{
    //             type: String,
    //             required: true, 
    //         },
    //         rating:{
    //             type: Number,
    //             required: true, 
    //         },
    //         comment:{
    //             type: String
    //         },
    //         createDate:{
    //             type:Number,
    //             default:Date.now
    //         }
    //     }
    // ]

});

const productData = mongoose.model("Product", productSchema);

export default productData;