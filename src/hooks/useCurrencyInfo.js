import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const[data,setData] = useState({});
    
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json())
        .then(res => {
            setData(res[currency]);
        })

        console.log("***printing the data inside useEffect useCurrencyInfo ****",data);
    },[currency]);

    console.log("printing outside the useEffect inside useCurrencyInfo",data);
    return data;
}

export default useCurrencyInfo;