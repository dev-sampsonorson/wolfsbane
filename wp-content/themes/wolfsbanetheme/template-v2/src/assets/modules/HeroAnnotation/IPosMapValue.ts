export default interface IPosMapValue {
    className: string;
    strategy: (distance, msgEL) => boolean
}