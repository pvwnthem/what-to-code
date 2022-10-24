import React from "react";
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useCookies } from "react-cookie";
import './examplePost.css'
import e from "express";
import { off } from "process";
const current = new Date();



// add a function to reset the cookie back to [] before adding to it
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);

export default function ExamplePost(props: any) {
    const [toggle, setToggle] = useState(0)
    const [toggle2, setToggle2] = useState(0)

    const [button, setButton] = useState(false);
    const [titleFull, setTitleFull] = useState(false);
    const [textFull, setTextFull] = useState(false);
        setTimeout(() => {
            setToggle(toggle + 1)
            setToggle2(toggle2 + 1)
        }, 150
        )
        useEffect(() => {
            
            if(props.title.length >= props.titleLimit) {
                setTitleFull(true)
            } 
            if(props.text.length >= props.textLimit) {
                setTextFull(true)
            } 
            if(props.text.length < props.textLimit) {
                setTextFull(false)
            }
            if(props.title.length < props.titleLimit) {
                setTitleFull(false)
            }
            
          }, [titleFull, toggle]);
        
    
          
    return (
        
        <div className=" w-screen h-full ">
           <form>
            <div id="o"className="w-full max-w-xl bg-gray-800 mx-auto mt-32 rounded-xl  flex flex-col break-all" >
                <a className="title flex-wrap lg:text-2xl md:text-2xl sm:text-lg text-white mx-4 mt-4">{ props.title }</a>
                { titleFull ?  (
                    <a className="text-xs shake text-red-500 ml-auto mr-8 flex">{props.title.length} / {props.titleLimit} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  </a>
                ) : (
                    <a className="text-xs ml-auto mr-8">{props.title.length} / {props.titleLimit}</a>
                )}
                
                
                <a className="content lg:text-md md:text-md sm:text-sm text-white mx-4 my-4">{ props.text }</a>
                
                { textFull ?  (
                    <a className="text-xs shake text-red-500 ml-auto mr-8 flex">{props.text.length} / {props.textLimit} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  </a>
                ) : (
                    <a className="text-xs ml-auto mr-8">{props.text.length} / {props.textLimit}</a>
                )}
                
                <div>
                <div className='h-20 mt-8 bg-blue-700 rounded-bl-xl rounded-br-xl items-center py-4'>
                
                 
                    <button className="w-full h-full mx-auto" onClick={() => {setButton(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>          
<span>1</span>  
                </button>
                
                
                

                </div>


                
            </div>
        </div>
           
        </form>
        </div>
    )
}
