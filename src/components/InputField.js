
export function InputField({title, value, onChange}) {
    return <div className="input-field">
        <span className="input-field-title">{title}</span>
        <input
            className="input-field-content"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>;
}

export function IntegerInputField({title, value, onChange}) {
    return <InputField
        title={title}
        value={value.toString()}
        onChange={
            (val) => {
                if (!isNaN(val)) {
                    onChange(parseInt(val));
                }
            }
        }
    />;
}
