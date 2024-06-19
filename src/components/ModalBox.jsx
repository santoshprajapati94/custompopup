import { useState } from "react";

const ModalBox = () => {
  const [showModal, setShowModal] = useState(false);


  console.log(showModal)
  return (
    <>
    <h2>Custom Modal Popup</h2>
    <button type="button" className="open-modal" onClick={ ()=>setShowModal(!showModal)}>Open Modal</button>
    <div className="modal-wrapper" style={showModal === true ?{ display: 'flex'}:{ display:'none'}}>
      <div className="head-popup">
      <span className="close-button" onClick={()=>setShowModal(!showModal)}>
          &times;
        </span>
        Header of Popup
      </div>
      <div className="body-popup">
        <input type="text" name="" id="" placeholder="Enter something" />
      </div>
      <div className="footer-popup">
        <button className="cancel-btn" type="button" onClick={()=>setShowModal(!showModal)}>Cancel</button>
        <button className="submit-btn" type="submit">Submit</button>
      </div>
    </div>
    </>
  )
}

export default ModalBox;

