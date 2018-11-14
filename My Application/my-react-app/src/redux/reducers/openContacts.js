export default function openContacts (state=false, action) {
    switch(action.type) {
        case 'SHOW_CONTACTS':
        return !state;

        default:
        return state;
    }
}