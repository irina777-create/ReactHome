import React from "react";
import  './style.css';
import './list.html';
export default  function List({list=[]}){
    return list.length ? <ul>
        {list.map((item,index)=><li key ={index}{item}></li>)}
    </ul>:null
}

