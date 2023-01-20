import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <>
      <div>HomePage</div>
      <Button color="gradient">Hola mundo</Button>
    </>
  );
};

export default HomePage;
