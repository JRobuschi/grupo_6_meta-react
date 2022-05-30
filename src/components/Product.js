import React from 'react';
//import { Component } from 'react/cjs/react.production.min';
import Genre  from './Products.js';



class Product extends React.Component{

    constructor(){
        super();
        this.state = {
            genres: [],
            loading: true,
            total: ""
        };
    }

    async componentDidMount() {
        
        const respuestaDesdeServer = await fetch('http://localhost:3080/api/products');
      const respuestaParseada = await (respuestaDesdeServer.json());
      this.setState(
          {
              genres: respuestaParseada.data,
              total: respuestaParseada.total
          }
      )

    }
  
    


    render(){
       
        return (
       
                
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h2 className="m-0 font-weight-bold text-gray-800">Products in Data Base</h2>
                            <div>
                                <h4>Total de productos: {this.state.total}</h4>
                               </div> 
                        
                        
                        <div className="card-body">
                            <div className="row">
                               
                               <div className='name'>
                                <h4>Name</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtName} key={index} />;
                                    })
                                }
                                </div>
                                <div className='description'>
                                <h4>Description</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtDescription} key={index} />;
                                    })
                                }
                                </div>
                                <div className='price'>
                                <h4>Price</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtPrice} key={index} />;
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
export default Product;