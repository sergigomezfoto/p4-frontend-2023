export const calculateComplementaryColor = (color: string | null): string => {
    if (color === null) {
        return "#ffffff";
    }
    const rgb = color.substring(1);
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);

    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;
    const compHex = `#${compR.toString(16).padStart(2, "0")}${compG.toString(16).padStart(2, "0")}${compB.toString(16).padStart(2, "0")}`;

    return compHex;
};

  export const getReadableTextColor = (color: string | null): string => {
    if (color === null) {
        return "#ffffff";
    }
    const rgb = color.substring(1);
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";
    return textColor;
}