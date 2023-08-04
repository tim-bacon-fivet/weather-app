function TextInput({ label, ...delegated }) {
    return (
        <label>
            {label}
            <input type='text' {...delegated} />
        </label>
    );
}

export default TextInput;
