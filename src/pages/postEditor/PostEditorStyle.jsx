import styled from "styled-components"

const SGrid = styled.section`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 3;
    width: 95%;
    margin: auto;

    .title_dropbox{
        display: grid;
        grid-template-columns: 90% 10%;
    }
`;

const STitleInput = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #E3E3E3;
    font-size: 20px;
    text-indent: 10px;

    &:focus{
        border-bottom: 2px solid #699BF7;
        outline:0;
    }
`

const SCategoryInput = styled.select`
    width: 100%;
    padding: 3px 50px 3px 3px;
    border: 1px solid #E3E3E3;
    border-radius: 8px;
    background-color: none;
    cursor: pointer;

    &:focus{
        outline:0;
    }
`

const STextAreaLabel = styled.label`
    display: block;
    text-indent: 10px;
    color: #929292;
`

const STextAreaInput = styled.textarea`
    width: 100%;
    height: 100px;
    border: 2px solid #E3E3E3;
    resize: vertical;

    &:focus{
        outline: 0;
        border: 2px solid #699BF7;
    }
`

export {
    SGrid,
    STitleInput,
    SCategoryInput,
    STextAreaLabel, STextAreaInput
}