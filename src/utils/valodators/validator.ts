export const required = (value: string) => {
    return value ? undefined : "Field is require"
};

export const maxLength = (length: number) => (value: string) => {
    return value.length > length ? `Max length is ${length} symbol` : undefined;
};