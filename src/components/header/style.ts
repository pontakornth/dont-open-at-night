import { IStyle } from "fela";
export const HeaderStyle = (): IStyle => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "dodgerblue",
    color: "brown",
    padding: "1.25rem"
});

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IStyleExtension {
    [x: string]: IStyle;
}

export const LinkStyle = (): IStyle | IStyleExtension => ({
    color: "white",
    textDecoration: "none",
    marginRight: "1rem",
    ":last-child": {
        marginRight: "unset"
    }
});
