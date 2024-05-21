import React from 'react'
import CustomEditor from '../../components/customEditor/CustomEditor';
import { SCategoryInput, SGrid, STextAreaInput, STextAreaLabel, STitleInput } from './PostEditorStyle';

function PostEditor() {
    return (
        <SGrid>
            <div className='title_dropbox'>
                <div className='centralize_horizontal'>
                    <STitleInput type="text" placeholder='Título'/>
                </div>
                <div>
                    <SCategoryInput>
                        <option value="placeholder" disabled selected hidden>Categoria</option>
                        <option value="tutorial">Tutorial</option>
                        <option value="noticia">Notícia</option>
                    </SCategoryInput>
                </div>
            </div>
            <div>
                <STextAreaLabel for="abstract">Resumo</STextAreaLabel>
                <STextAreaInput id="abstract"/>
            </div>
            <div>
                <CustomEditor/>
            </div>
        </SGrid>
    );
}

export default PostEditor