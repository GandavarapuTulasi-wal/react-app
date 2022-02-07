import {useState} from 'react'

function Native(){
    let [City,setNative]=useState("Initial City")
    function addNative(event){
        event.preventDefault()
        let formTag=event.target
        let inputTagNative=formTag.city
        setNative(inputTagNative.value)
        inputTagNative.value=""


    }
    return(
        <form onSubmit={addNative}>
            <h1>Native={City}</h1>
            <br/>
            <input type="text" name="city" placeholder="Enter your city"/>
            <button>Show Native</button>
        </form>
    )

}
export default Native