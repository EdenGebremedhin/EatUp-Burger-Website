import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios" //for http requests
import { toast } from 'react-toastify'

//state management
const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false); // image = stores the uploaded image(file object)
  const[data, setData] = useState({ // data = stores the text inputs using a single object
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
 
  // input change handler - only for the text inputs
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }
  
  //checking if data is being updated

  // useEffect(()=>{
  //     console.log(data);
  // }, [data])

  //Api call
  const onSubmitHandler = async (event) =>{
    event.preventDefault() //to prevent reloading
    const formData = new FormData(); // object to send data(both text and file)
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>

      <form className='flex-col' onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price } type="number" name='price' placeholder='20 Birr'/>
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add