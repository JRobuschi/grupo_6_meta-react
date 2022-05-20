import React, {Component} from "react";
//import PropTypes from 'prop-types';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            product: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( error => console.log(error))
    }

    

    componentDidMount() {
        console.log("Me monte!");
        this.apiCall("http://localhost:3080/api/products", this.mostrarProduct)
       
    }

    mostrarProduct = (data) => {
        console.log(data);
    }

    componentDidUpdate() {
        console.log("Me actualice!");
    }

    render() {
        console.log("Estoy renderizado");

        let contenido;

        if (this.state.product === "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.product}></img>
        }


        return(
            <div>
                {contenido}
            </div>
        );
    }
}

export default Product;