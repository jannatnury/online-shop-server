import productData from "../models/productData.js";

// Create product
const createProduct = async (req, res) => {
    try {
        const { name, details, price, stock,image, category,rating, review} = req.body;
        if (name && details && price && stock && image && category && rating) {

            const product = new productData({
                name: name, details: details, price: price, stock: stock
            });
            const data = await product.save();
            return res.send(data);
        }
        else {
            res.send({ message: "Please fill all fields." });
        }

    } catch (error) {
        console.log(error);
    }
};

// get all product
const getProduct = async (req, res) => {
    try {
        const result = await productData.find({});
        res.send(result);

    } catch (error) {
        console.log(error);
    }
};

// get single data

const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await productData.findById(id);
        res.send(result);

    } catch (error) {
        console.log(error);
    }
};

// Delete Product
const productDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productData.findById(id);
        if (product) {
            const result = await product.remove();
            res.send(result);
        }
        else {
            res.send({
                message: "nun_field error"
            });
        }

    } catch (error) {
        console.log(error);
    }

};

export {
    createProduct, getProduct, getSingleProduct, productDelete
};