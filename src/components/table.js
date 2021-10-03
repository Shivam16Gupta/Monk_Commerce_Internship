import React, { useState,useRef } from "react";
import {
  Dialog
} from "@material-ui/core";

const Table=(props)=>{
    console.log(props.data)
  return(

    <div>

    <table>
    <tr>
    <td>Name</td>
    <td>{props.data.name}</td>
    </tr>
    <tr>
    <td>Conatct Number</td>
    <td>{props.data.number}</td>
    </tr>
    <tr>
    <td>State</td>
    <td>{props.data.state}</td>
    </tr>
    <tr>
    <td>City</td>
    <td>{props.data.city}</td>
    </tr>
    <tr>
    <td>Line 1 Address</td>
    <td>{props.data.line1}</td>
    </tr>
    <tr>
    <td>Line 2 Address</td>
    <td>{props.data.line2}</td>
    </tr>
    <tr>
    <td>Landmark</td>
    <td>{props.data.landmark}</td>
    </tr>
    <tr>
    <td>Pincode</td>
    <td>{props.data.pincode}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>{props.data.name}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>{props.data.name}</td>
    </tr>
    </table>
    </div>



  );
}

 export default Table;
