import { Card, Grid, Row, Text } from '@nextui-org/react';
import { FC } from 'react';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  return (
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
  );
};
