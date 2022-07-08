import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'


const Home: NextPage = () => {
  return (
    <Layout title='Listado de Pokèmons'>
      <h1>Pokémon App</h1>
      {/* <Button color="gradient">
          Hola
      </Button> */}
    </Layout>
  )
}

export default Home
