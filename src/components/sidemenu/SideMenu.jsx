import { Link, NavLink } from "react-router-dom";
import { AddIcon, Board, ClockBackIcon, Lock, SearchIcon, SettingsIcon, TemplateIcon, WebButton } from "../../assets/Icons";

import favouriteIcon from "../../assets/images/favourite.png"
import boardIcon from "../../assets/images/board.png"
import lockIcon from "../../assets/images/lock.png"
import userImage from "../../assets/images/userImage.jpg"

import "./style.css";

const SideMenu = ({fetchedTemplates, myBoards}) => {
    return (
        <aside
            className="side-menu d-flex f-column"
        >
            <header
                className="header d-flex f-align-center"
            >
                <img src="./images/logo.svg" alt="" />
            </header>

            <nav
                className="sidebar-nav"
            >
                <ul>
                    <li className="sidebar-header">
                        <span>
                            <TemplateIcon />
                        </span>
                        <span>
                            My Templates
                        </span>
                    </li>
                    <li>
                        <div className="search search-sidebar">
                            {/* <span>
                                <SearchIcon />
                            </span> */}
                            <input type="search" name="" id="" placeholder="Search" />
                        </div>
                    </li>
                    {
                        fetchedTemplates?.map((el, i) => (
                            <li key={el?._id+'templates'}>
                                <NavLink
                                    to={`my-templates/${el?._id}`}
                                ><span>
                                    <img src={favouriteIcon} alt="" />
                                </span>{el?.name}</NavLink>
                            </li>
                        ))
                    }

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Past search 1
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Past search 2
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Computers and information
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Database Administrator
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Computer security
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to=""
                        >
                            <span>
                                <ClockBackIcon />
                            </span>
                                Computer Systems Analyst
                        </NavLink>
                    </li>
                    <li className="sidebar-header">
                        <span>
                            <Board />
                        </span>
                        <span>
                            My boards
                        </span>
                        <button
                            className="btn"
                        >
                            <AddIcon />
                        </button>
                    </li>

                    {
                        myBoards?.map((el, i) => (
                            <li key={el?._id+'boards'}>
                                <NavLink
                                    to={`my-boards/${el?._id}`}
                                ><span>
                                    {el?.locked ?  <img src={lockIcon} alt="" /> : <img src={boardIcon} alt="" />}
                                </span>{el?.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <footer className="user-space d-flex f-justify-between f-align-center">
                <div className="user-name-space d-flex f-align-center">
                    <figure
                        style={{
                            backgroundImage: `url(${userImage})`
                        }}
                    ></figure>
                    <span>
                        Carla
                    </span>
                </div>
                <Link 
                    className="user-settings"
                    to="personal-information"
                >
                    <SettingsIcon />
                </Link>
            </footer>
        </aside>
    );
}

export default SideMenu;