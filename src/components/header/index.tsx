import { FunctionalComponent, h } from "preact";
import { useFela } from "preact-fela";
import { HeaderStyle, LinkStyle } from "./style";
// import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    const { css } = useFela();
    return (
        <nav class={css(HeaderStyle)}>
            <a class={css(LinkStyle)} href="javascript:void(0)">
                Home
            </a>
            <a class={css(LinkStyle)} href="javascript:void(0)">
                About
            </a>
            <a class={css(LinkStyle)} href="javascript:void(0)">
                Apple
            </a>
        </nav>
    );
};

export default Header;
