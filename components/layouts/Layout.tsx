import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Sebastian Carrillo" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title} , pokemon, pikachu`} />
      </Head>
      <main>{children}</main>
    </>
  );
};
