export const colorStyles = {

    control: (styles) => ({
        ...styles,
        background: "transparent",
        border: "solid 2px #f6b8d5",
        borderColor: "#f03c90",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "2px",

        "&:hover": {
            borderColor: "#f6b8d5",
        }
    }),

    indicatorSeparator: (styles) => ({
        ...styles,
        background: "#f6b8d5",
    }),

    dropdownIndicator: (styles) => ({
        ...styles,
        "svg": {
            fill: "#f6b8d5",
        }
    }),

    option: (styles) => ({
        ...styles,
        background: "#09264f",
        color: "rgb(255, 255, 255)",
        fontSize: "1rem",
        fontWeight: "bold",
    }),

    singleValue: (styles) => ({
        ...styles,
        background: "transparent",
        color: "rgb(255, 255, 255)",
    }),

    menuList: (styles) => ({
        ...styles,
        background: "#09264f",
        color: "rgb(255, 255, 255)",
        textAlign: "left"
    }),

}
