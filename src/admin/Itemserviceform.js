import React from 'react'

const Itemserviceform = ({ handleSubmit, handleChange, values, setValues }) => {
    const { brands, description, price,catogery,subcatogery } = values;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Brand</label>
                    <input type="text" name="brands" className="form-control" value={brands} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={description} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" className="form-control" value={price} onChange={handleChange} />
                </div>
                <br/>

                 <div className="form-group">
                <label>Catogery: &nbsp;</label>
                <select style={{ borderRadius: "7px", width: "auto", textAlign: "center", paddingLeft: "2px", paddingRight: "2px" }} onChange={handleChange} name="catogery" value={catogery}>

                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
            </div>
<br/>
            <div className="form-group">
                <label>Sub-Catogery: &nbsp;</label>
                <select style={{ borderRadius: "7px", width: "auto", textAlign: "center", paddingLeft: "2px", paddingRight: "2px" }} onChange={handleChange} name="subcatogery" value={subcatogery}>

                  <option value="Sub-Category 1">Sub-Catogery 1</option>
                  <option value="Sub-Category 2">Sub-Catogery 2</option>
                  <option value="SubCategory 3">Sub-Catogery 3</option>
                </select>
            </div>
            {/*<div className="form-group">
                <label>Price</label>
                <input type="number" name="price" className="form-control" value={price} onChange={handleChange} />
            </div> */}
                <button style={{ marginTop: '15px', borderRadius: "10px", transition: ".4s ease all" }} className=" btn-outline-info">
                    Save
                </button>
            </form>
        </>

    )
}

export default Itemserviceform
