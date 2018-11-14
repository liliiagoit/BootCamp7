export default function openSoftSkills (state=false,action) {
    switch(action.type) {
        case 'SHOW_SOFT_SKILLS':
        return !state;

        default:
        return state;
    }
}