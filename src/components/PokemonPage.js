import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemonData => setPokemon(pokemonData))
  },[]);

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  const pokemonToDisplay = pokemon.filter(pokemon => (
    search === "" ? true : pokemon.name.toUpperCase().indexOf(search.toUpperCase()) > -1
  ))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitForm={handleSubmit} />
      <br />
      <Search searchText={search} onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonArray={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
