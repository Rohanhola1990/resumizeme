import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
    let {boardId} = useParams();
    useEffect(() =>{
        console.log('Board Id', boardId);
    }, [])
    return (
        <>
            Board {boardId}
        </>
    );
}
 
export default Board;