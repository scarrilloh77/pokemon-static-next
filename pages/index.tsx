import { Grid, Image } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface IHomePage {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IHomePage> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <Image src="/img/banner.png" width={200} height={150} />
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

// getStaticProps: Propiedades estaticas generadas a la hora de construccion de la app (build).
// Solo se pueden usar dentro de las pages. y se construyen del lado del servidor. Nunca corren en el cliente.
// dev => Se llaman cada vez que se hace una solicitud a la page.
// build de prod => Solo se ejecutada una vez y no se vuelve a llamar.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, ind) => ({
    ...pokemon,
    id: ind + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      ind + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
