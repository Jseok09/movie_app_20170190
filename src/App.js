import PropTypes from "prop-types"

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
{
  id: 1,
  name: 'Kimchi' ,
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1store.io%2FofficialProductImage%2F1587198787425-0712162682417814.png&f=1&nofb=1',
  rating: 5
},
{
  id: 2,
  name: 'Samgyeopsal',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7eVH1-RFh79bxlSFkE3_OQHaFj%26pid%3DApi&f=1',
  rating: 4.9
},
{
  id: 3,
  name: 'Bibimbap',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pRnKRrM81L9hbe4DThII0QHaEK%26pid%3DApi&f=1',
  rating: 4.8
},
{
  id:4,
  name: 'Doncasu',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.joE5cNaLzhfW129LDOm6iwHaE8%26pid%3DApi&f=1',
  rating: 4.5
},
{
  id:5,
  name: 'Kimbap',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XiO-APPrmYLstQXFFJDGrgHaE-%26pid%3DApi&f=1',
  rating: 5
},
];

function App() { 
  return (
    <div>
      {foodILike.map(dish =>
      <Food Key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}
    </div>
  );
}

export default App;
