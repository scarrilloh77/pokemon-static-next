import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse } from './interfaces';

interface IHomePage {
  pokemons: any;
}

interface IPokemon {
  name: string;
  url: string;
}

const HomePage: NextPage<IHomePage> = (props) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <ul>
          {props.pokemons.map((pokemon: IPokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

// Solo se pueden usar dentro de las pages. y se construyen del lado del servidor. Solo se ejecutan una unica vez.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
