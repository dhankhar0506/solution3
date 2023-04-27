import logo from './logo.svg';
import './App.css';
import { Shoping_card } from './card/card';

function App() {
  const productDetails = {
    productId : "1",
    productPic : "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/h/q/j/-original-imagg7htgwnkhuf9.jpeg?q=70",
    productName : "shoes",
    Brand : " PumA",
    productDescription : " PUMA has made history as a creator of fast product designs for the fastest athletes on the planet: We enhance sports such as football, running and training, golf, basketball and motorsports with performance and sport-inspired lifestyle products.",
    Price : "Price : 1200 rs ",
    Rating : "Rating: 4.5/5"
    
 }
 



  return (
    <div className="App">
      <div className="firstRow">
     <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
     </div>
     <div className="secondRow">
     <Shoping_card
      detail = {productDetails}
     />
      <Shoping_card
      detail = {productDetails}
     />
     
     </div>
    </div>
  );
}

export default App;