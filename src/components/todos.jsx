import React, { useEffect, useState } from "react";
import TodoService from "../services/TodoService";
import Axios from "axios";
export default function Todos() {
  const [todos, settodos] = useState([]);
  const [selectedtodo, setselectedtodo] = useState();
  const [tog, settog] = useState();
  useEffect(() => {
    retriveTodos();
  }, []);
  
  const retriveTodos = async () => {
    const response = await TodoService.getAll();
    console.log("Resp is: ", response);
    settodos(response.data);
  };

  const removeTutorials = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    console.log("updatedTodos", updatedTodos);
    settodos(updatedTodos);
    settog(false)
    setselectedtodo(null);
    
    
    const response = await TodoService.remove(id);
    // await TodoService.getAll();
    console.log("delete res:", response);
  };
  const URL="https://jsonplaceholder.typicode.com/users"
  const [data, setData]= useState({
    id:"",
    name: "",
    username:"",
    email:"",
    
  })
  function handle(e) {
    const newdata={...data }
    newdata[e.target.id]=e.target.value
    setData(newdata)
    
  }
  function submit(e) {
    e.preventDefault();
    console.log(data.id);
    console.log(data.name);
    console.log(data.username);
    console.log(data.email);
    Axios.post(URL,{
      id:data.id,
      name:data.name,
      username:data.username,
      email:data.email
    })
  }
  return (
    <div className="list row">
      <div className="col-md-8">
        {/* <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByTitle}
          >
            Search
          </button>
        </div>
      </div> */}
      </div>
      <div className="col-md-6">
        <h4>Tutorials List</h4>

        <ul className="list-group">
          <li>Shoaib</li>
          <li>Ahmed</li>
          {/* if data load show data else empty */}
          {/* todos[0]!=null?todos[0].title:"" */}
          {/* {todos[0]?.title} */}

          {todos?.map((todo) => (
            <>
              <li
                key={todo.id}
                onClick={() => setselectedtodo(todo)}
                className={"list-group-item "}
              >
                {todo.name}
              
                
              </li>
             
            </>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        {selectedtodo ? (
          <div>
            <h4>Todo</h4>
            <div>
              <label>
                <strong>Id:</strong>
              </label>{" "}
              {selectedtodo.id}
            </div>
            <div>
              <label>
                <strong>Username:</strong>
              </label>{" "}
              {selectedtodo.username}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {selectedtodo.email}
            </div>        
            <div>
              <label>
                <strong>Adress:</strong>
              </label>{" "}
             {selectedtodo.address.street} 
            {", "} {selectedtodo.address.suite} {", "} {selectedtodo.address.city} {", "} {selectedtodo.address.zipcode}
            {", "} {selectedtodo.address.geo.lat} {", "} {selectedtodo.address.geo.lng}       
            </div>
            




            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={() => removeTutorials(selectedtodo.id)}
            >
              Delete
            </button>
            
           <form onSubmit={(e)=>submit(e)}>
            
            <input onChange={ (e)=>handle(e)} id="id" value={data.id}  placeholder="id" type="text" />
            <input onChange={ (e)=>handle(e)} id="name" value={data.name}  placeholder="name" type="text" />
            <input onChange={ (e)=>handle(e)} id="username" value={data.username}  placeholder="username" type="text" />
            <input onChange={ (e)=>handle(e)} id="email" value={data.email}  placeholder="email" type="text" />
            <br/>
            <br/>
            <button  className=" btn btn-sm btn-danger">Submit</button>
           </form>

           <ul className="list-group">

          <li>Ahmed</li>
          {/* if data load show data else empty */}
          {/* todos[0]!=null?todos[0].title:"" */}
          {/* {todos[0]?.title} */}

            <>
              <li
                key={data.id}

                className={"list-group-item "}
              >
                {data.name}
              
                
              </li>
             
            </>
          
        </ul>

      

            {/* <Link
              to={"/tutorials/" + currentTutorial.id}
              className="badge badge-warning"
            >
              Edit
            </Link> */}
          </div>
        ) : (
          
          <div>
            <p>
          {
              tog == false ? 'Deleted' : ''
            }
           </p>
            
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
}
