export const useHeight = (el: HTMLElement | null | undefined) => {
    if (!el) return 0;
    return el.clientHeight;
}