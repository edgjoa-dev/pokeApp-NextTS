import React from 'react'
import {Spacer, Text, useTheme} from '@nextui-org/react'




export const Navbar = () => {

    const {theme} = useTheme();


    return(

        <div style={{
                alignItems: 'center',
                backgroundColor: theme?.colors.gray900.value,
                display: 'flex',
                height: '3rem',
                justifyContent: 'start',
                padding: '0px 20px',
                width: '100%',
            }}
        >
        <Text>P</Text>
        <Text>ókemon</Text>
            <Spacer css={{ flex: 1 }}/>
        <Text>Favoritos</Text>
        </div>

    )
}
