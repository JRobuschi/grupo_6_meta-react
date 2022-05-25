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
        console.log('estoy1')
        const respuestaDesdeServer = await fetch('http://localhost:3080/api/products');
      const respuestaParseada = await (respuestaDesdeServer.json());
      this.setState(
          {
              genres: respuestaParseada.data,
              total: respuestaParseada.total
          }
      )

    }
  
    componentWillUnmount(){
        console.log("me estoy renderizando")
    }


    render(){
       
        return (
       
                
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Product in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <h4>Total: {this.state.total}</h4>
                                
                                <h4>Name</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtName} key={index} />;
                                    })
                                }
                                <h4>Price</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtPrice} key={index} />;
                                    })
                                }
                                <h4>Description</h4>
                                {this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.pdtDescription} key={index} />;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        
        )
    } 
    

}
export default Product;