function Button({ children, variant = 'primary', ...props }) {
    const base = 'px-6 py-3 rounded-full font-body font-medium transition-colors';
    const variants = {
      primary: 'bg-coral text-offwhite hover:bg-plum',
      secondary: 'bg-transparent border-2 border-plum text-plum hover:bg-plum hover:text-offwhite',
    };
  
    return (
      <button className={`${base} ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  
  export default Button;