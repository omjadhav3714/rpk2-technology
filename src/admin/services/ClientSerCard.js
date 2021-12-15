import React from 'react'

const ClientSerCard = ({Servicedata}) => {
    const {address,contact,email,sname}=Servicedata;
    return (
    
        <div className="row3">
                <div className="box">
                    <div className="tit">
                    <span><strong>Service Name: </strong>{sname}</span><br />
                    
                        <span><strong>Email: </strong>{email}</span><br />
                        <span><strong>Contact:</strong> {contact}</span><br />
                        <span><strong>Address:</strong> {address}</span>
                    </div>

                    {/* {<Button onClick={() => handleRemove(p_id.toString())} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
                    </Button>}

                    {<Link to={`/client/editpassword/${p_id}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>} */}
                </div>
            </div>
    )
}

export default ClientSerCard
