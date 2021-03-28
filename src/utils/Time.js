
export function pad_with_zeros(num, size) {
    let s = num + "";
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}

export function secondsToTime(total_seconds) {
    const total_minutes = Math.floor(total_seconds / 60);
    const hours = Math.floor(total_minutes / 60);
    return [
        pad_with_zeros(hours, 2),
        pad_with_zeros(total_minutes % 60, 2),
        pad_with_zeros(total_seconds % 60, 2)
    ];
}
