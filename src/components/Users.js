import React from 'react';
//import { Component } from 'react/cjs/react.production.min';
import Genre  from './Products.js';



class Users extends React.Component{

    constructor(){
        super();
        this.state = {
            user: [],
            loading: true,
            total: ""
        };
    }

    async componentDidMount() {
        const respuestaDesdeServer = await fetch('http://localhost:3080/api/users');
      const respuestaParseada = await (respuestaDesdeServer.json());
      this.setState(
          {
              user: respuestaParseada.data,
              total: respuestaParseada.total
          }
      )

    }
  
    


    render(){
       
        return (
       
                
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h2 className="m-0 font-weight-bold text-gray-800">Users in Data Base</h2>
                        <div>
                        <h4>Total de usuarios: {this.state.total}</h4>
                        </div>
                        
                        <div className="card-body">
                            <div className="row">
                                
                                
                                <div className='name'>
                                <h4>Id</h4>
                                {this.state.user.map((genre,index)=>{
                                        return  <Genre  genre={genre.idUser} key={index} />;
                                    })
                                }
                                </div>
                                <div className='price'>
                                <h4>Nombre</h4>
                                {this.state.user.map((genre,index)=>{
                                        return  <Genre  genre={genre.nombre} key={index} />;
                                    })
                                }
                                </div>
                                <div className='description'>
                                <h4>Apellido</h4>
                                {this.state.user.map((genre,index)=>{
                                        return  <Genre  genre={genre.apellido} key={index} />;
                                    })
                                }
                                </div>
                                <div className='price'>
                                <h4>Email</h4>
                                {this.state.user.map((genre,index)=>{
                                        return  <Genre  genre={genre.email} key={index} />;
                                    })
                                }
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        
        )
    } 
    

}
export default Users;