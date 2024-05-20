'use client'

import { useEffect } from "react";

export default function Payment(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API);
    myHeaders.append("Content-Type", "application/json");
    const route =  "/localhost:3000/api/payment"

    useEffect(()=>{
        fetch("https://api.chapa.co/v1/transaction/initialize",request)
    })
    http://localhost:3000/payment
    return (<div>Hello world</div>)
}