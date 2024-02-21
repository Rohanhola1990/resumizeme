import { Outlet } from "react-router-dom";
import { useState } from "react";

import SideMenu from "../components/sidemenu/SideMenu";

import "../assets/style/pages/main.css"

const templatesArray = [
    {
        _id: 1,
        name: 'Software Engineer'
    },
    {
        _id: 2,
        name: 'Computer hardware engineer'
    },
    {
        _id: 3,
        name: 'Network Engineer'
    },
    {
        _id: 4,
        name: 'Technical Support'
    },
    {
        _id: 5,
        name: 'Network administrator'
    },
    {
        _id: 6,
        name: 'Management'
    },
    {
        _id: 7,
        name: 'Data analysis'
    },
    {
        _id: 8,
        name: 'Computer technician'
    },
]

const boardArray = [
    {
        _id: 1,
        name: 'Board 1',
        locked: false
    },
    {
        _id: 2,
        name: 'Board 2',
        locked: false
    },
    {
        _id: 3,
        name: 'Board 3',
        locked: false
    },
    {
        _id: 4,
        name: 'Board agent 1',
        locked: true
    },
    {
        _id: 5,
        name: 'Board agent 2',
        locked: true
    },
    {
        _id: 6,
        name: 'Board agent 3',
        locked: true
    },
]

const LoggedInTemplate = () => {
    const [fetchedTemplates, setFetchedTemplates] = useState(templatesArray)
    const [myBoards, setMyBoards] = useState(boardArray)

    return (
        <div className="loggedIn-template d-flex dvh-100">
            <SideMenu
                fetchedTemplates={fetchedTemplates}
                myBoards={myBoards}
            />
            <main
                className="main-space f-1"
            >
                <Outlet />
            </main>
        </div>
    );
}

export default LoggedInTemplate;