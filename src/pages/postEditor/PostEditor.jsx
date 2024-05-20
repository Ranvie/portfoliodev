import React, { useState } from 'react'
import 'tinymce/tinymce';
import 'tinymce/models/dom/model';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import { Editor } from '@tinymce/tinymce-react';

function PostEditor() {
    const [contentEditor, setContentEditor] = useState();
    const handleEditorChange = (content, editor) => {
        setContentEditor(content);
    }

    return (
        <Editor
            initialValue=""
            init={{
                skin: false,
                content_css: false,
                height: 500,
                menubar: false,
                plugins: [
                    'link',
                    'table',
                    'image'
                ],
                toolbar:
                    'undo redo | fontfamily fontsize bold italic underline strikethrough superscript subscript | forecolor backcolor | alignleft aligncenter alignright alignjustify outdent indent | \
                    image table numlist bullist code link'
            }}
            value={contentEditor}
            onEditorChange={handleEditorChange}
        />
    );
}

export default PostEditor