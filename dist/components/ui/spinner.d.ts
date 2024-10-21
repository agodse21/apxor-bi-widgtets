import { type VariantProps } from "class-variance-authority";
declare const spinnerVariants: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type SpinnerProps = VariantProps<typeof spinnerVariants>;
declare const Spinner: {
    (props: SpinnerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Spinner, type SpinnerProps };
