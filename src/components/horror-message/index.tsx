import { ComponentChildren, FunctionalComponent, h } from "preact";
import { useFela } from "preact-fela";
import { useEffect, useRef, useState } from "preact/hooks";
import HorrorMessageStyle from "./style";

interface HorrorMessageProps {
    children?: ComponentChildren;
}

const HorrorMessage: FunctionalComponent<HorrorMessageProps> = ({
    children
}: HorrorMessageProps) => {
    const { css } = useFela();
    const ref = useRef<HTMLDivElement>();
    const [passed, setPassed] = useState<boolean>(false);
    const [seen, setSeen] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Before being seen
                if (entry.isIntersecting && !seen) {
                    setSeen(true);
                    // After being seen
                } else if (!entry.isIntersecting && seen) {
                    setPassed(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {});
        observer.observe(ref.current);
        return (): void => {
            observer.disconnect();
        };
    });
    return (
        <div
            ref={ref}
            class={css(HorrorMessageStyle)}
            style={{ visibility: passed ? "hidden" : "visible" }}
        >
            {children}
        </div>
    );
};

export default HorrorMessage;
