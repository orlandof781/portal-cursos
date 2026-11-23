export default function Textarea({
                                          id,
                                          name,
                                          label,
                                          value,
                                          onChange,
                                          erro,
                                          rows = 4,
                                          maxLength,
                                          placeholder,
                                      }) {
    const idErro = `erro-${id}`;

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                maxLength={maxLength}
                placeholder={placeholder}
                aria-invalid={!!erro}
                aria-describedby={erro ? idErro : undefined}
            />
            {maxLength && (
                <small className="contador">
                    {value.length}/{maxLength}
                </small>
            )}
            {erro && (
                <small id={idErro} className="erro">
                    {erro}
                </small>
            )}
        </>
    );
}
