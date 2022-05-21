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
        this.apiCall("https://api.bluelytics.com.ar/v2/latest", this.mostrarProduct)
       
    }

    mostrarProduct = (oficial) => {


        this.setState(
            {
            product: oficial.blue.value_avg
    })
}


    

    render() {
        console.log("Estoy renderizado");

        let contenido;

        if (this.state.product === "") {
            contenido = <p>Cargando1...</p>
        } else {
            console.log(this.state.product);
            contenido = <p src={this.state.product}></p>
        }


        return(
            <div>
                {this.state.product}
            </div>
        );
    }

    componentDidUpdate() {
        console.log("Me actualice!");
    }

}

    


export default Product;