import { FunctionalComponent, h } from "preact";
import { useFela } from "preact-fela";
import Content from "../../components/content";
import { Container } from "./style";

const Home: FunctionalComponent = () => {
    const { css } = useFela();
    return (
        <div class={css(Container)}>
            <Content />
        </div>
    );
};

export default Home;
