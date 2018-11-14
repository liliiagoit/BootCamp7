export default function openProjects (state=false,action) {
    switch(action.type) {
        case 'SHOW_PROJECTS':
        return !state;

        default:
        return state;
    }
}