export const colorStyles = {

    control: (styles) => ({
        ...styles,
        background: "transparent",
        border: "solid 2px #f03c90;",
        borderColor: "#f03c90;",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "2px",

        "&:hover": {
            borderColor: "#f03c90;",
        }
    }),

    indicatorSeparator: (styles) => ({
        ...styles,
        background: "#f03c90;",
    }),

    dropdownIndicator: (styles) => ({
        ...styles,
        "svg": {
            fill: "#f03c90;",
        }
    }),

    option: (styles) => ({
        ...styles,
        background: "#09264f;",
        color: "rgb(255, 255, 255);",
        fontSize: "1rem",
        fontWeight: "bold",
    }),

    singleValue: (styles) => ({
        ...styles,
        background: "transparent",
        color: "rgb(255, 255, 255);",
    }),

    menuList: (styles) => ({
        ...styles,
        background: "#09264f;",
        color: "rgb(255, 255, 255);",
        textAlign: "left"
    }),

}
