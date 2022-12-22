import './styles.css';
import carImageHome from '../../assets/images/product-car.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho.
            </p>
          </div>
        </div>

        <div className="home-image-container">
          <img src={carImageHome} alt="Imagem do Produto Carro" />
        </div>
      </div>
    </div>
  );
};

export default Home;
