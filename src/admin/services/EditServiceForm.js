import React from 'react'

const EditServiceForm = ({ handleSubmit, handleChange, values, setValues }) => {
    const { sname } = values;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Service Name</label>
                    <input type="text" name="sname" className="form-control" value={sname} onChange={handleChange} />
                </div>

                <button style={{ marginTop: '15px', borderRadius: "10px", transition: ".4s ease all" }} className=" btn-outline-info">
                    Save
                </button>
            </form>
        </>

    )
}

export default EditServiceForm
