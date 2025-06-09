import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form"
import config from "../config/config";


export default function RTE({name,control,label,defaultValue=""})
{
return (
    <div className="clear-none">
    {label && 
    <label className="clear-none">{label}</label>
    }

    <Controller 
    name={name || "content"}
    control={control}
    render={({field: {onChange}})=>(
        <Editor 
        apiKey={config.tinymceAPIkey}
        initialValue={defaultValue}
        init={{
        height: 400,
        menubar: false,
        plugins: [
        'link', 'image', 'preview', 'anchor', 'lists', 'media',
        'table', 'code', 'wordcount'],
        toolbar:
    'undo redo | formatselect | ' +
    'bold italic underline forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image media table | code preview',
        content_style:
    'body { font-family: "Inter", sans-serif; font-size: 15px; line-height: 1.6; color: #333 }'
}}
onEditorChange={onChange}
/>
)}
/>
    </div>
)
}
