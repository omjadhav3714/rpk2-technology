import React from 'react'

const Complaientform = ({ handleSubmit, handleChange, values, setValues }) => {
    const { brands, description } = values;
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
                <button style={{ marginTop: '15px', borderRadius: "10px", transition: ".4s ease all" }} className=" btn-outline-info">
                    Save
                </button>
            </form>
        </>

    )
}

export default Complaientform



