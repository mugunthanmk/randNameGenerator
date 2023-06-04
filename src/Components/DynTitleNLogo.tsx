import React, { useEffect } from 'react'

type Props={
children:React.ReactNode;
name:string;
icon:string;
}

function DynTitleNLogo(props:Props) {
    useEffect(()=>{
        if(props.name){
            document.title = props.name;
        }
        else{
            document.title = "Name Generator"
        }
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
            link = document.createElement('link') as HTMLLinkElement;
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        if(props.icon){
            link.href=props.icon;
        }
        else{
            link.href="/vite.svg";
        }
    },[props.name,props.icon])

  return (
   <>
   {props.children}
   </>
  )
}

export default DynTitleNLogo