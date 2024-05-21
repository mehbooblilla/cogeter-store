import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductList from '../Components/ProductList'
const baseUrl=process.env.REACT_APP_BASE_URL
const MainPage = () => {
const [products,setProducts]=useState([])
const [loading,setLoading]=useState(false)
useEffect(()=>{
    const fetchProducts = async () => {
        setLoading(true)
        try {
          const response = await axios.get(`${baseUrl}/products?limit=30`);
          setProducts(response?.data?.data)
          setLoading(false)
        } catch (error) {

          console.error('Error fetching products:', error);
          setLoading(false)
        }
      };
      
fetchProducts()

},[])
    console.log(products);
    if(loading){
        return <Loader/>
    }
  return (
    <div>
        <Navbar/>
        <div>
            <h1 className='text-2xl font-semibold flex justify-center my-10'>Product List</h1>
        </div>
        <div>
            <ProductList products={products}/>
        </div>
        </div>
  )
}

export default MainPage

