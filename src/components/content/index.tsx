import { combineRules } from "fela";
import { FunctionalComponent, h } from "preact";
import { useState, useLayoutEffect } from "preact/hooks";
import { useFela } from "preact-fela";
import lorem from "./lorem";
import { ContentLayoutStyle, ContentNightStyle } from "./style";

const Content: FunctionalComponent = () => {
    const [message, setMessage] = useState<string>("");
    useLayoutEffect(() => {
        const now = new Date();
        if (now.getHours() > 18 || now.getHours() < 5) {
            setMessage("I think you should not be here.");
        } else {
            setMessage(lorem);
        }
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
