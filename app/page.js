"use client"
import React, { useState } from "react";

const page = () =>{
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [maintask, setMainTask] = useState([])

  const submitHandler = (dets) =>{
    dets.preventDefault();
    setMainTask([...maintask, {task, desc}])
    setTask("")
    setDesc("")
  }

  const deleteHandler = (idx) =>{
    let copyTask = [...maintask]
    copyTask.splice(idx, 1);
    setMainTask(copyTask)
  }

  let rendertext = <h2>No task available</h2>
  if(maintask.length > 0){
    rendertext = maintask.map((elem, idx)=>{
      return (
        <li key={idx} className="flex justify-between items-center m-2">
          <div className="text-white flex justify-between items-center w-2/3">
            <h5 className="font-bold text-2xl">{elem.task}</h5>
            <h6 className="text-xl">{elem.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(idx)
          }} className="bg-red-500 p-4 text-white font-bold rounded-md">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <div className="bg-slate-500 text-white font-bold text-5xl text-center p-4">My ToDo List</div>
      <form onSubmit={submitHandler}>
        <input className="border-2 border-blue-500  rounded-md m-2 p-4" type="text" placeholder="Enter task here" value={task} onChange={(dets)=>{
          setTask(dets.target.value)
        }}></input>
        <input className="border-2 border-blue-500  rounded-md m-2 p-4" type="text" placeholder="Enter description here" value={desc} onChange={(dets)=>{
          setDesc(dets.target.value)
        }}></input>
        <button className="bg-green-500 p-4 text-white font-bold rounded">Add task</button>
      </form>
      <div className="bg-slate-500 text-white p-4 mt-2">
        <ul>{rendertext}</ul>
      </div>
    </>
  )
}

export default page