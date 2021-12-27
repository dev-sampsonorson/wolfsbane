export default interface IPosStrategy {
    isValid(distance, msgEl: HTMLElement): boolean;
}