import React from 'react'

const Itemserviceform=({ handleSubmit, handleChange, values, setValues })=> {
    const { brands, description, price } = values;
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

            {/* <div className="form-group">
                <label>Other Services</label>
                <input type="text" name="otherservices" className="form-control" value={otherservices} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" name="price" className="form-control" value={price} onChange={handleChange} />
            </div> */}
            <button style={{marginTop: '15px',}} className="btn btn-outline-info">
                Save
            </button>
            </form>
        </>

    )
}

export default Itemserviceform
