const openFieldId = ref<string | null>(null);

export const useInputFieldState = () => {
    return {
        openField: (id: string) => {
            // zet het geopende veld id
            openFieldId.value = id;
        },
        closeField: () => {
            // zet het geopende veld id op null
            openFieldId.value = null;
        },
        // controleer of een veld open is
        isFieldOpen: (id: string) => computed(() => openFieldId.value === id),
    };
};