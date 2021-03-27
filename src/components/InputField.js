
export function InputField({title, value, onChange}) {
    return <div className="input-field">
        <span className="input-field-title">{title}</span>
        <input
            className="input-field-content"
            value={value}
            onChange={onChange}
        />
    </div>;
}
