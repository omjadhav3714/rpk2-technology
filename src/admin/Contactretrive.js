import React from 'react'
import './tables.css';  
import Adminnav from './Adminnav';
import { db } from "../Firebase";
function Contactretrive() {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //   loadAllServices();
    // }, []);
  
  
    const loadAllServices = async() => {
    //   await db.collection('users').get().then((querySnapshot) => {
               
    //       // Loop through the data and store
    //       // it in array to display
    //       querySnapshot.forEach(element => {
    //           var data = element.data();
    //           setServices(arr => [...arr , data]);
                
    //       });
    //   })
      
    };
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>

          <h1>Contact retrive</h1>
          </div>
          </div>
        </>

    )
}

export default Contactretrive
