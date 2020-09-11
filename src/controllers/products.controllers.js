import product from '../models/Products'

export const createProduct=async (req,res)=>{
    const {name,category,price,imgURL} = req.body
    const newProduct=new product({name,category,price,imgURL})
    const productSave=await newProduct.save()
    res.status(201).json(productSave)
}

export const getProducts=async (req,res)=>{
    const products= await product.find()
    res.status(200).json(products)
}
export const getProductById=async (req,res)=>{
    const prod= await product.findById(req.params.productId)
    res.status(200).json(prod)
}
export const updateProductById=async (req,res)=>{
    const updatedProduct= await product.findByIdAndUpdate(req.params.productId,req.body,{
         new: true
        })
    res.status(200).json(updatedProduct)
}
export const deleteProductById=async(req,res)=>{
    const deletedProduct= await product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
}