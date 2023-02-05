import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from './interfaces';

interface IHomePage {
  pokemons: SmallPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}

const HomePage: NextPage<IHomePage> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <ul>
          {pokemons.map(({ id, name }) => (
            <li key={id}>
              {id} - {name}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

// Solo se pueden usar dentro de las pages. y se construyen del lado del servidor. Solo se ejecutan una unica vez.
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
