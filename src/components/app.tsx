import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import { RendererProvider } from "preact-fela";
import { createRenderer } from "fela";
import typescript from "fela-plugin-typescript";

import Home from "../routes/home";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

const renderer = createRenderer({
    plugins: [typescript()]
});

const App: FunctionalComponent = () => {
    return (
        <RendererProvider renderer={renderer}>
            <div id="app">
                <Header />
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/night" component={Home} />
                    <NotFoundPage default />
                </Router>
            </div>
        </RendererProvider>
    );
};

export default App;
