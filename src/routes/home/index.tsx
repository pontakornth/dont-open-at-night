import { FunctionalComponent, h, Fragment } from "preact";
import { useFela } from "preact-fela";
import Content from "../../components/content";
import Header from "../../components/header";
import { Container } from "./style";

const Home: FunctionalComponent = () => {
    const { css } = useFela();
    return (
        <Fragment>
            <Header />
            <div class={css(Container)}>
                <Content />
            </div>
        </Fragment>
    );
};

export default Home;
