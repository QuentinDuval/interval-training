
export function InputField({title, value, onChange}) {
    return <div>
        <span className="input-field-title">{title}</span>
        <input
            className="input-field"
            value={value}
            onChange={onChange}
        />
    </div>;
}
