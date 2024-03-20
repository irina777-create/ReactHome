import React from "react";
import  './style.css';
import './index.html';


const  Table=({brand,models})=>{


    return<>
    < div classname="tableContainer">
        <div className="brand">{brand}
        </div>
    <div>
    {models.map((item)=>{
        return <TableItem
        name={item.name}
        colllection={item.collection}
        />

    })}
    </div>
    </div>
    </>
}
export default Table;