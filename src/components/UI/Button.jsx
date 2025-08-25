export default function Button({ children, textOnly, className = '', ...props }) {
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className; // Add a space before concatenating className
    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}
