import React from 'react'
import api from '../api/config'
import { UserDetails } from '../types/userDerails';

type responseType={
    data:{
        results:UserDetails[];
    }
}

function useRandNameApi() {
    const [result,setResult]=React.useState<UserDetails|null>(null);
    React.useEffect(()=>{
        const val=localStorage.getItem("info");
        if(val){
            setResult(JSON.parse(val));
        }
        else{
            fetchFn();
        }
    },[])

    const fetchFn=async()=>{
        const result=await api.get<any,responseType>("");
        const data=result.data.results[0];
        localStorage.setItem("info",JSON.stringify(data));
        setResult(data);
    }

    const refetch=()=>{
        fetchFn();
    }
   

  return {data:result,refetch};
}

export default useRandNameApi