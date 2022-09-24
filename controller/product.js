import productData from "../models/productData.js";

// Create product
const createProduct = async (req, res) => {
    try {
        console.log("get all products");
        const { name, details, price, stock,image, category} = req.body;
        if (name && details && price && stock && image && category) {

            const product = new productData({
                name: name, details: details, price: price, stock: stock, category: category, image: image
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
        console.log("get all products");
        const result = await productData.find({});
        res.send(result);
        

    } catch (error) {
        console.log(error);
    }
};

// get single data

const getSingleProduct = async (req, res) => {
    try {
        console.log("get all products");
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
        console.log("get all products");
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