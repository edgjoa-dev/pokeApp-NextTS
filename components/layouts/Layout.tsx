import * as React from 'react';
import Head from 'next/head'

type Props = {
    children?: React.ReactNode
    };

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Head>
                <title>Pokemon App</title>
                <meta name='author' content='Edgar Joaquin Flores'/>
                <meta name='description' content='Info sobre pokèmon  XXXX'/>
                <meta name='keywords' content='XXX, pokèmon, pokedex, pokeapi'/>
            </Head>
                {/* <Navbar /> */}
            <main>
                {children}
            </main>
        </>
    )
}
