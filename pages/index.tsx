import { Card, Grid, Row, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from './interfaces';

interface IHomePage {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IHomePage> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, name, img }) => (
            <Grid xs={4} sm={3} md={2} xl={1} key={id}>
              <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text>#{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
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
