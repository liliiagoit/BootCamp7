export default function openTechSkills (state=false,action) {
    switch(action.type) {
        case 'SHOW_TECH_SKILLS':
        return !state;

        default:
        return state;
    }
}