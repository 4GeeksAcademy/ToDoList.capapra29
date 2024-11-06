import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[listaTareas,setListaTareas]=useState(["Aprender React", "Aprender Python"])
	const [tarea, setTarea]=useState("")

	const agregarTarea=(evento)=>{
		evento.preventDefault()
		setListaTareas([...listaTareas, tarea])
		setTarea("")
	}
	const eventoEnter=(evento)=>{
		if(evento.key=="Enter"){
			agregarTarea(evento)
		}
	}
	const borrarTarea=(evento, id)=> {
		evento.preventDefault()
		let aux = listaTareas.filter((item,index)=>{
			return(index!=  id)
		})
		setListaTareas(aux)
	}
	return (
		<div className="text-center container">
			<h1> To Do List </h1>
			<input type="text" className="form-control" value={tarea} onChange={(e)=>setTarea(e.target.value)} onKeyDown={eventoEnter}/> 
			<div className="mt-3"> 
				<ul className="list-group">
					{listaTareas.map((item,index)=>(
						<li className="list-group-item" key={index}>
							{item}
							<i className="fa fa-trash float-end fs-4 text-danger icono-oculto"
							onClick={(evento)=> borrarTarea(evento,index)}> </i>
							</li>
					))}
					</ul>
				</div>
		</div>
	);
};

export default Home;
