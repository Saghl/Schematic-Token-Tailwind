// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary" | "outline")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-full px-6 py-3 text-base font-medium cursor-pointer transition-colors duration-200";

    // Variant-specific colours — each class maps to a semantic token in index.css
    const variants = {
        secondary: "bg-action-secondary text-text-primary hover:bg-action-secondary-hover border-none",
        primary:   "bg-action-primary text-surface hover:bg-action-primary-hover border-none",
        outline:   "bg-transparent text-action-outline border-2 border-action-outline hover:bg-action-outline hover:text-surface",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
