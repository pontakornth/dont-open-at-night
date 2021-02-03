import { combineRules } from "fela";
import { FunctionalComponent, h } from "preact";
import { useState, useLayoutEffect } from "preact/hooks";
import { useFela } from "preact-fela";
import lorem from "./lorem";
import { ContentLayoutStyle, ContentNightStyle } from "./style";

const Content: FunctionalComponent = () => {
    const [message, setMessage] = useState<string>("");
    useLayoutEffect(() => {
        setMessage(lorem);
    }, []);
    const { css } = useFela();
    return (
        <div class={css(ContentLayoutStyle)}>
            <h1>Lorem ipsum dolor amend</h1>
            <p>{message}</p>{" "}
        </div>
    );
};

export default Content;
