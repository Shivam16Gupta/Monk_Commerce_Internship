import React, { useState,useRef } from "react";

const Table=()=>{
  return(

    <div>
    <table>
    <tr>
    <td>Name</td>
    <td>{data.name}</td>
    </tr>
    <tr>
    <td>Conatct Number</td>
    <td>{data.number}</td>
    </tr>
    <tr>
    <td>State</td>
    <td>{data.state}</td>
    </tr>
    <tr>
    <td>City</td>
    <td>{data.city}</td>
    </tr>
    <tr>
    <td>Line 1 Address</td>
    <td>{data.line1}</td>
    </tr>
    <tr>
    <td>Line 2 Address</td>
    <td>{data.line2}</td>
    </tr>
    <tr>
    <td>Landmark</td>
    <td>{data.landmark}</td>
    </tr>
    <tr>
    <td>Pincode</td>
    <td>{data.pincode}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>{data.name}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>{data.name}</td>
    </tr>
    </table>
    </div>



  );
}

default export Table;
