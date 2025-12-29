export interface Props {
    direction: "row" | "column";
    layout?: "equal" | "quarter-three" | "three-quarter" | "third-two" | "two-third" | "thirds";
    collapse?: "sm" | "md" | "lg";
    spacing?: boolean;
}