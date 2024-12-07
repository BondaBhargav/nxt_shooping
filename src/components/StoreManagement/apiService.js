import { createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'

const getProducts =createAsyncThunk("products/Data" ,async ({activeOptionId,activeCategoryId,searchInput,activeRatingId}) => {
   try{
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`

    const options = { headers: { Authorization: `Bearer ${jwtToken}` }, method: 'GET' }
    const response = await fetch(apiUrl, options)
    
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
     return updatedData
    }} catch(error){
        console.log("error in fetching data")
        throw (error)

    }
  })
export default getProducts
 