import ProductCard from "components/ProductCard";

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <h3>Seja bem vindo a página de catalogo</h3>
         <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
