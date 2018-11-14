export default function openMenu (state=false, action) {
    switch(action.type) {
        case 'SHOW_MENU':
        return !state;

        default:
        return state;
    }
}