import React from 'react'
import { Styles } from './style';
import './style.css'

const Styled = () => {
    console.log("HI", Styles)
    return (
        <>
            <Styles.Main>
                <Styles.Para>Hello</Styles.Para>
            </Styles.Main>
        </>
    )
}

export default Styled