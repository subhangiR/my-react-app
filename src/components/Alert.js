import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
            const lower= word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  return (
    <div style={{height:"50px",marginBottom:"20px"}}>
   { props.title && <div className={`alert alert-${props.title.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.title.type)}</strong>: {props.title.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>}</div>
  )
}
