'use client'

import EditorJS from '@editorjs/editorjs'
import { useEffect, useRef } from 'react';
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Quote from '@editorjs/quote'
import Warning from '@editorjs/warning'
import Marker from '@editorjs/marker'
import CodeTool from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import RawTool from '@editorjs/raw'
import Checklist from '@editorjs/checklist'
import Paragraph from '@editorjs/paragraph'
import SimpleImage from '@editorjs/simple-image'
import { save } from '../action';


const Editor = (props) => {
    
    const editorInstance = useRef(null);
    useEffect(() => {
        if (!editorInstance.current) {
            editorInstance.current = new EditorJS({
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: ['link'],
                        config: {
                            placeholder: 'Enter a header',
                            levels: [1, 2, 3, 4, 5, 6],
                            defaultLevel: 3
                        }
                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    image: {
                        class: SimpleImage,
                        inlineToolbar: true,
                    },
                    embed: {
                        class: Embed,
                        inlineToolbar: true,
                        config: {
                            services: {
                                youtube: true,
                                coub: true
                            }
                        }
                    },
                    table: {
                        class: Table,
                        inlineToolbar: true
                    },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote\'s author',
                        },
                    },
                    warning: Warning,
                    marker: Marker,
                    code: CodeTool,
                    delimiter: Delimiter,
                    inlineCode: InlineCode,
                    linkTool: LinkTool,
                    raw: RawTool,
                    checklist: Checklist,
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                    },
                },
                holder: 'editorjs',
                data: {
                    blocks: JSON.parse(localStorage.getItem(`${props.id} data`)) ||[]
                },


                onChange: () => {

                    editorInstance.current.save().then((outputData) => {
                        localStorage.setItem(`${props.id} data`, JSON.stringify(outputData.blocks))
                        console.log("Data saved")
                        save(props.id, localStorage.getItem(`${props.id} data`) || JSON.stringify([]), localStorage.getItem(`${props.id} excalidraw`) || JSON.stringify({}))
                        
                    }).catch((error) => {
                        
                    })
                },
                onReady: () => {
                    
                }
            });
        }
        return () => {
            if (editorInstance.current && typeof editorInstance.current.destroy === 'function') {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, [])
    return (
        <div className={`w-full ml-20`}>
            <div id="editorjs"></div>
        </div>
    )
}

export default Editor