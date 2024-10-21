interface PropertyValueSelectorProps {
    value: string[];
    onChange: (value: string[]) => void;
    options: {
        label: string;
        value: string;
    }[];
}
export default function PropertyValueSelector({ onChange, options, value, }: PropertyValueSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};
