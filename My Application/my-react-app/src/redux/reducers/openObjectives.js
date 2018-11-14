export default function openObjectives (state=false, action) {
    switch(action.type){
        case 'SHOW_OBJECTIVES':
        return !state;

        default:
        return state;
    }
}