import {secondsToTime} from '../utils/Time';


export function InputField({title, value, onChange, readOnly = false}) {
    return <div className="input-field">
        <span className="input-field-title">{title}</span>
        <input
            className="input-field-content"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            readOnly={readOnly}
        />
    </div>;
}

export function IntegerInputField({title, value, onChange, readOnly=false}) {
    return <InputField
        title={title}
        value={value.toString()}
        onChange={
            (val) => {
                if (val === "") {
                    onChange(0);
                } else if (!isNaN(val)) {
                    onChange(parseInt(val));
                }
            }
        }
        readOnly={readOnly}
    />;
}

export function TimeInputField({title, value}) {
    const [h, m, s] = secondsToTime(value);
    return <InputField
        title={title}
        value={h + ":" + m + ":" + s}
        readOnly={true}
    />;
}
