export default function openLanguages (state=false,action) {
    switch(action.type) {
        case 'SHOW_LANGUAGES':
        return !state;

        default:
        return state;
    }
}