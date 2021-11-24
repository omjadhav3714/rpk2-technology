import "../../Singlecard.css";
import { db } from "../../../Firebase";
import { motion } from "framer-motion";
function Compcarddetail({ item1, id, det }) {
  const Onhandle = async (e) => {
    e.preventDefault();
    // setdeces(e.target.value);
    var tar = e.target.value;
    // var arr={
    //     brand: brand,
    //     description: description,
    //    image:images,
    //    email:email,
    //    name:name,
    // }

    await db
      .collection("compdetail")
      .doc(id)
      .update({
        c_id: det.c_id,
        decision: tar,
        price: det.price,
        status: det.status,
      })
      .then(() => {
        //   history.push("/");
        window.location.reload()
        console.log("this is id", e.target.value);
        // history.push('/');        //   window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Changes recorded failed");
        window.location.reload();

        // alert("Successully change done");
        // alert(err.response.data.err);
      });
  };
  return (
    <>
     <motion.div
       
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
     >
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Email:&nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {item1.email}</b>
            </span>
          </li>
          <li className="list-group-item">
            Name:&nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {item1.name}</b>
            </span>
          </li>

          <li className="list-group-item">
            Brand:&nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {item1.brand}</b>
            </span>
          </li>

          <li className="list-group-item">
            Desc: &nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {item1.description}</b>
            </span>
          </li>
          <li className="list-group-item">
            Price: &nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {det.price}</b>
            </span>
          </li>
          <li
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              padding: "1rem",
              lineHeight: "1",
            }}
          >
            <div className="form-group">
              Approve/Disapprove:{" "}
              <select
                onChange={Onhandle}
                style={{
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "5px",
                }}
                name="decision"
              // value={det.decision}
              >
                <option value={det.decision}>{det.decision}</option>

                {det.decision === "disagree" ? (
                  <option value="agree">agree</option>
                ) : (
                  <option value="disagree">disagree</option>
                )}
              </select>
            </div>
          </li>
          <li className="list-group-item">
            Status: &nbsp;{" "}
            <span className="label label-default label-pill pull-xs-left">
              <b> {det.status}</b>
            </span>
          </li>
        </ul>
        {console.log("descri", item1.description)}
      </div>
      </motion.div>
    </>
  );
}

export default Compcarddetail;
