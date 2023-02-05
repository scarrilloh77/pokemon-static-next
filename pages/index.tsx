import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <>
      <Layout title="Listado de pokemons">
        <ul>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>
      </Layout>
    </>
  );
};

// Solo se pueden usar dentro de las pages. y se construyen del lado del servidor. Solo se ejecutan una unica vez.
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      name: 'Sebastian',
    },
  };
};

export default HomePage;
