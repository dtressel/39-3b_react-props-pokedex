import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => (
  <div className="pokecard-div">
    <h3>{name}</h3>
    <div className="pokemon-img-div">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
    </div>
    <div>Type: {type}</div>
    <div>EXP: {base_experience}</div>
  </div>
)

export default Pokecard;