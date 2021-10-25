import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'react-bootstrap'

import { useSelector } from 'react-redux'
// import { listAsincronica } from '../actions/actionProducto'

const PaginaPrincipal = () => {
  const { productos } = useSelector(store => store.producto)
  const dispatch = useDispatch()
  // console.log(productos);

  // dispatch(listAsincronica());


  // usuarios
  const usuarios = [];

  productos.forEach(user => {
    usuarios.push(user.nombre)
  });

  // Funcion seleccionar usuario --------------------------------------------------------------------
  const [pintarUsuario, setPintarUsuario] = useState(false);
  const [pintar, setPintar] = useState({
    nombre: "",
    cedula: "",
    fecha: "",
    correo: "",
    github: "",
    imagen: ""
  });

  const handleUser = (e) => {
    e.preventDefault()
    const selectUser = document.querySelector('#usuarios').value
    productos.forEach(element => {
      if (element.nombre === selectUser) {
        const { nombre, cedula, fecha, correo, github, imagen } = element;
        setPintar({
          nombre: nombre,
          cedula: cedula,
          fecha: fecha,
          correo: correo,
          github: github,
          imagen: imagen
        })
        setPintarUsuario(true)

        repositorios(github)
      }
    });
  }

  // Consumo de api github --------------------------------------------------------------------------------
  const [apiGitHub, setApiGitHub] = useState([])

  const repositorios = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    setApiGitHub(data)
    // console.log(data)
  }

  // Paginacion 
  const [recargar, setRecargar] = useState(false);

  let paginas = [];
  const [pagina, setPagina] = useState(0)
  // let page = JSON.parse(localStorage.getItem('page'))
  const [page, setPage] = useState([])

  useEffect(() => {
    if (apiGitHub.length) {
      for (let i = 0; i < 6; i++) {
        paginas.push(apiGitHub[i]);
      }
      localStorage.setItem("page", JSON.stringify(paginas))
    }
    setPage(JSON.parse(localStorage.getItem('page')))
    if (pagina === 0) {
      let contador = pagina + 1
      setPagina(contador)
    }
  }, [apiGitHub])

  const handleNext = (e, next) => {
    e.preventDefault();
    if (pagina < 6) {
      let contador = pagina + 1
      setPagina(contador)

      if (pagina === 1 && next === 'next') {
        paginas = []
        // let contador = pagina + 1
        // setPagina(contador)

        for (let i = 5; i < 10; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 2 && next === 'next') {
        paginas = []
        // let contador = pagina + 1
        // setPagina(contador)

        for (let i = 10; i < 15; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 3 && next === 'next') {
        paginas = []
        // let contador = pagina + 1
        // setPagina(contador)

        for (let i = 15; i < 20; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 4 && next === 'next') {
        paginas = []
        // let contador = pagina + 1
        // setPagina(contador)

        for (let i = 20; i < 25; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 5 && next === 'next') {
        paginas = []
        for (let i = 25; i < 30; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }
    }

  }

  const handlePrevious = (e, previous) => {
    e.preventDefault();

    if (pagina <= 6) {
      let contador = pagina - 1
      setPagina(contador)

      if (pagina === 5 && previous === 'previous') {
        paginas = []
        // let contador = pagina - 1
        // setPagina(contador)

        for (let i = 20; i < 25; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 4 && previous === 'previous') {
        paginas = []
        // let contador = pagina - 1
        // setPagina(contador)

        for (let i = 15; i < 20; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 3 && previous === 'previous') {
        paginas = []
        for (let i = 10; i < 15; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
        // let contador = pagina - 1
        // setPagina(contador)
      }

      if (pagina === 2 && previous === 'previous') {
        paginas = []
        // let contador = pagina - 1
        // setPagina(contador)

        for (let i = 5; i < 10; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }

      if (pagina === 1 && previous === 'previous') {
        paginas = []
        for (let i = 0; i < 5; i++) {
          paginas.push(apiGitHub[i]);
        }
        localStorage.setItem("page", JSON.stringify(paginas))
        setPage(JSON.parse(localStorage.getItem('page')))
      }
    }
  }

  return (
    <div>
      <div className="contenedor-select">
        <select name="usuarios" id="usuarios" className="lista-usuarios">
          <option value="none">Selecciona un usuario ↓</option>
          {
            (usuarios.length) ?
              (
                usuarios.map((user, i) => (
                  <option key={i} value={user}>
                    {user}
                  </option>
                ))
              ) :
              (<p>No hay candidatos</p>)
          }
        </select>
        <button className="btn-usuarios" onClick={e => handleUser(e)}>click</button>
      </div>

      {
        (pintarUsuario) ?
          (
            <Table striped bordered hover>
              <thead className="thead1">
                <tr>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Fecha de nacimiento</th>
                  <th>Correo</th>
                  <th>Github</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>{pintar.nombre}</td>
                  <td>{pintar.cedula}</td>
                  <td>{pintar.fecha}</td>
                  <td>{pintar.correo}</td>
                  <td>{pintar.github}</td>
                </tr>
              </tbody>

            </Table>

          ) :
          <p>Datos no disponibles</p>
      }


      {/* ------------------------------------------------------------------------------------- */}

      {/* tabla repositorios */}

      <br />
      <Table striped bordered hover>
        <thead className="thead2">
          <tr>
            <th>Nombre del repositorio </th>
            <th> Descripcion </th>
            <th> Branch por defecto </th>
            <th> Lenguaje </th>
            <th> Url del repositorio </th>
          </tr>
        </thead>
        <tbody>
          {
            (JSON.parse(localStorage.getItem('page'))) ?
              (
                page.map((element, index) => (

                  <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.default_branch}</td>
                    <td>{element.language}</td>
                    <td><a href={element.html_url} rel="noopener" Target="_blank"> Ir al repositorio </a></td>
                  </tr>
                )
                )
              ) :
              <p>Datos no disponibles</p>
          }
        </tbody>

      </Table>

      {
        (JSON.parse(localStorage.getItem('page')))?(
          <div div div div div className="d-flex justify-content-center">
            <button onClick={e => handlePrevious(e, 'previous')} className="mx-1">Previous</button>
            <button onClick={e => handleNext(e, 'next')} className="mx-1">Next</button>
            <span>Pagina: {pagina}</span>
          </div>

        ):
        <div></div>
      }

    </div >
  )
}

export default PaginaPrincipal
