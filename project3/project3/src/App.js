import logo from './logo.svg';
import './App.css';
import Card from './card.js/card';

function App() {
  return (
    <div className="App">
    <Card  image="https://www.redwolf.in/image/catalog/stickers/tom-face-sticker-india.jpg" designation="Web developer" name= "Gourav Dhankhar" />


   


    <Card  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGN7QEvLlfeAR9m0taN1U9pRusJfcLtaN3Uw&usqp=CAU" designation="Full Stack Web developer" name= "Goku" />



    <Card  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgaKstzKH2weh-i-apURUWICE60c2unHCWA&usqp=CAU" designation="Front_end_developer" name= "Vegeta" />
       
    </div>
  );
}

export default App;