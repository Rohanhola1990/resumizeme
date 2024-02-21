import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Template = () => {
    let {templateId} = useParams();
    useEffect(() =>{
        console.log('templateId', templateId);
    }, [])
    return (
        <>
            Template {templateId}
        </>
    );
}
 
export default Template;