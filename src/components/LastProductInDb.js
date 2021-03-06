import React, { Component } from "react";
import ContentCard from "./contentCard";


const PRODUCTS_URL = "http://localhost:3000/api/products";
// const PRODUCTS_URL = "/api/products";

class LastProductInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log("Evento: Constructor");
    }

    render() {
        if (!this.state.lastProduct) {
            return <div>Cargando...</div>;
        }
        return (
          <ContentCard  title={this.state.lastProduct.name}>
            <div className="justify-content-center text-center">
            <h2>{this.state.lastProduct.producto}</h2>
            <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "20rem" }}
                 src={`http://localhost:3000/imgProductos/${this.state.lastProduct.image}`}
                alt="Imagen del producto"
              />
            <h5 className="text-center">Proveedor: {this.state.lastProduct.proveedor}</h5>
            <p className="text-center">Precio: $ {this.state.lastProduct.precio}.-</p>
            </div>
            
          </ContentCard>
        );
    }

    componentDidMount() {
        console.log("Evento: componentDidMount");
        this.fetchLastProduct();
    }
    async fetchLastProduct() {
        const result = await fetch(PRODUCTS_URL);
        const response = await result.json();
        const products = response.data;
        const lastProductId = products.length - 1;
        const lastProduct = products[lastProductId];

        console.log(lastProduct);


        this.setState({ lastProduct: lastProduct });
    }
}
export default LastProductInDb;
