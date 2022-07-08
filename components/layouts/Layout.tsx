import * as React from 'react';
import Head from 'next/head'
import { Navbar } from '../ui';

type Props = {
    children?: React.ReactNode;
    title?: string;
    };

export const Layout: React.FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp' }</title>
                <meta name='author' content='Edgar Joaquin Flores'/>
                <meta name='description' content={`Info sobre pokèmon  ${title}`}/>
                <meta name='keywords' content={`${title}, pokèmon, pokedex, pokeapi`}/>
            </Head>
                <Navbar />
            <main style={{
                padding: '0px 2rem'
            }}>
                {children}
            </main>
        </>
    )
}
