export const required = (value: string) => {
    return value ? undefined : "Field is require"
};

export const maxLength = (length: number) => (value: string) => {
    return value.length > length ? `Max length is ${length} symbol` : undefined;
};

export const urlValidate = (url: string) => {
    try {
        new URL(url);
        return undefined;
    } catch (err) {
        return url === undefined ? undefined : 'Link should be https://www.adress.com'
    }
}