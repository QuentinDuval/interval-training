import {secondsToTime, timeToSeconds} from '../utils/Time';


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

export function TimeInputField({title, value, onChange, readOnly=false}) {
    const [h, m, s] = secondsToTime(value);
    let valueToDisplay = h + ":" + m + ":" + s;
    if (h === "00") {
        valueToDisplay = m + ":" + s;
        if (m[0] === "0") {
            valueToDisplay = m[1] + ":" + s;
        }
    } else if (h[0] === "0") {
        valueToDisplay = h[1] + ":" + m + ":" + s;
    }
    return <InputField
        title={title}
        value={valueToDisplay}
        onChange={(val) => {
            onChange(timeToSeconds(val))
        }}
        readOnly={readOnly}
    />;
}
