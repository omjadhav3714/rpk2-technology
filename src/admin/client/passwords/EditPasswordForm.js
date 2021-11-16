import React from 'react'

const EditPasswordForm = ({ handleSubmit, handleChange, values, setValues }) => {
    const { model, password } = values;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" name="model" className="form-control" value={model} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="password" className="form-control" value={password} onChange={handleChange} />
                </div>
                <button style={{ marginTop: '15px', borderRadius: "10px", transition: ".4s ease all" }} className=" btn-outline-info">
                    Update password
                </button>
            </form>
        </>

    )
}

export default EditPasswordForm
