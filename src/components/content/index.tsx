import { Fragment, FunctionalComponent, h } from "preact";
import { useState, useLayoutEffect } from "preact/hooks";
import { useFela } from "preact-fela";
import HorrorMessage from "../../components/horror-message";
import { ContentLayoutStyle } from "./style";

const Content: FunctionalComponent = () => {
    const [isNighttime, setNighttime] = useState<boolean>(false);
    useLayoutEffect(() => {
        const now = new Date();
        if (now.getHours() >= 19 || now.getHours() <= 5) {
            setNighttime(true);
        }
    }, []);
    const { css } = useFela();
    return (
        <div class={css(ContentLayoutStyle)}>
            <h1>Lorem ipsum dolor amend</h1>
            {isNighttime ? (
                <Fragment>
                    <HorrorMessage>
                        I have been tracked by someone or something for a while.
                        I always feel uneasy when I code. It haunt me. It is
                        always here. For some reasons, I think it&apos;s because
                        I overwork.
                    </HorrorMessage>
                    <HorrorMessage>
                        But no. I already tried to rest but it&apos;s still
                        there. there. It&apos;s a shadowy figure. I think
                        it&apos; look human. It&apos;s height is similar to me.
                    </HorrorMessage>
                </Fragment>
            ) : (
                "This is daytime."
            )}
        </div>
    );
};

export default Content;
