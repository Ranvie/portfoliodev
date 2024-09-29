import React, { useState } from 'react'
import CustomEditor from '../../components/customEditor/CustomEditor';
import { SCategoryInput, SGrid, SSubmitButton, STextAreaInput, STextAreaLabel, STitleInput } from './PostEditorStyle';
import { NewPostRequest } from '../../models/post/NewPostRequest';


function PostEditor() {

    const [editorContent, setEditorContent] = useState();

    const onEditorContentChanged = (content) => {
        setEditorContent(content);
    }

    const handleSubmit = () => {

        const categories = document.getElementById('category')
        
        const request = new NewPostRequest
        (
            document.getElementById('title').value,
            document.getElementById('summary').value,
            categories.options[categories.selectedIndex].text,
            '',
            new Date().toLocaleDateString('pt-BR'),
            editorContent
        );

        //TODO: Verificar se o usuário está autenticado como admin e enviar para o firebase
        console.log(request)
    }

    return (
        
        //TODO: Verificar se algum input está vazio e notificar

        <SGrid>
            <div className='title_dropbox'>
                <div className='centralize_horizontal'>
                    <STitleInput id='title' type="text" placeholder='Título'/>
                </div>
                <div>
                    <SCategoryInput id='category'>
                        <option value="tutorial">Tutorial</option>
                        <option value="noticia">Notícia</option>
                    </SCategoryInput>
                </div>
            </div>
            <div className='top_spacing_25px'>
                <STextAreaLabel for="summary">Resumo</STextAreaLabel>
                <STextAreaInput id="summary"/>
            </div>
            <div className='top_spacing_25px'>
                <CustomEditor getContent={onEditorContentChanged}/>
            </div>
            <div className='top_spacing_25px bottom_spacing_25px centralize'>
                <SSubmitButton onClick={handleSubmit}>Salvar</SSubmitButton>
            </div>
        </SGrid>
    );
}

export default PostEditor