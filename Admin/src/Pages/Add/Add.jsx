import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

  const [image, setImage]= useState(false)

  const [data, setData] = useState({
    name:"",
    description: "",
    price:"",
    category:"1"

  })

  const onChangeHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setData(data=>({
        ...data,[name]:value
    }))
  }

  const onSubmitHandler = async(e)=>{
    e.preventDefault()

    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
  }
  
  return (
    <>
        <div className="add">
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-image-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={ image ? URL.createObjectURL(image) : assets.upload_area} />
                    </label>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" name="image" hidden required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter Product Name' required/>
                </div>
                <div className="product-description flex-col">
                    <p>Product Despription</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here' required></textarea>
                </div>
                <div className="add-category-price">
                   <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
                    </div> 
                </div>
                <button type='submit' className='add-button'>Add</button>
            </form>
        </div>

    </>
  )
}

export default Add