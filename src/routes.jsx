import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import LoggedInTemplate from './pages/index';
import TemplateIndex from "./pages/templates";
import BoardIndex from "./pages/boards"

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const PersonalInformation = lazy(() => import('./pages/settings/PersonalInformation'))
const Template = lazy((() => import("./pages/templates/TemplateBase")))
const Board = lazy(() => import("./pages/boards/MyBoards"))


const Routing = () => {
    let { templateId, boardId } = useParams();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<LoggedInTemplate />}
                >
                    <Route
                        index
                        element={
                            <Suspense fallback="">
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route 
                        default
                        path="personal-information"
                        element={
                            <Suspense fallback="">
                                <PersonalInformation />
                            </Suspense>
                        }
                    />
                    <Route
                        path="my-templates"
                        element={<TemplateIndex />}
                    >
                        <Route
                            path=":templateId"
                            element={
                                <Suspense fallback="">
                                    <Template />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route
                        path="my-boards"
                        element={<BoardIndex />}
                    >
                        <Route
                            path=":boardId"
                            element={
                                <Suspense fallback="">
                                    <Board />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route
                        path="*"
                        element={<Dashboard />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;