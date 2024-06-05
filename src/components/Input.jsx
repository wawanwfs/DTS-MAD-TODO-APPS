const Input = ({ value, onChange, placeholder, icon, type, className }) => {
    return (
        <label className={`input input-bordered flex items-center gap-2 ${className}`}>
            {icon}
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
        </label>
    );
};

export default Input;