import './styles.css';
import cardCar from '../../assets/images/car-card.svg';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
        <div className="card-top-container">
          <img src={cardCar} alt="Nome do Produto" /> 
          <h6>Audi Supra IT</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi </p>
          <button>Comprar</button>
        </div>
    </div>
  );
}

export default ProductCard;
