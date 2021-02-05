import { ComponentChildren, FunctionalComponent, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

interface HorrorMessageProps {
    children?: ComponentChildren;
}

const HorrorMessage: FunctionalComponent<HorrorMessageProps> = ({
    children
}: HorrorMessageProps) => {
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
        <div ref={ref} style={{ visibility: passed ? "hidden" : "visible" }}>
            {children}
        </div>
    );
};

export default HorrorMessage;
