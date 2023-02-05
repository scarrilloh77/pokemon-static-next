import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout title="Algun pokemon">
      <h1>
        {id}-{name}
      </h1>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: 'Bulbasaur',
    },
  };
};

export default PokemonPage;
