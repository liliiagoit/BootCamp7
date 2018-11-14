export default function openEducation (state=false,action) {
    switch(action.type) {
        case 'SHOW_EDUCATION':
        return !state;

        default:
        return state;
    }
}