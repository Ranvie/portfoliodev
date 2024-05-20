import styled from 'styled-components'

const SHeader = styled.header`
    width: 100%;
    height: 100px;
    padding: 15px 5px 15px 5px;
    box-shadow: 0px 2px 10px 2px #699BF7;
`

const SHeaderGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 5% 45% 45% 5%;

    .centralize{
        justify-self: center;
        align-self: center;
    }

    .path{
        align-self: flex-start;
        justify-self: flex-end;
    }

    .logo_text{
        display: flex;
        align-items: center;
    }

`

const STitle = styled.h1`
    color: black;
    font-size: 32px;
    display: inline-block;
`

const SPath = styled.p`
    font-size: 14px;
    text-decoration: underline;
    font-style: italic;
`

const SImg = styled.img`
    height: 40px;
    width: 40px;
`

export {
    STitle,
    SHeader, SHeaderGrid,
    SPath,
    SImg
}