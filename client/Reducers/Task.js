const todoState = {
    tasks: []
}
const todoReducer = (copyState = todoState, action) => {
    let ts = [...copyState.tasks];
    // Object.assign(st, copyState);
    switch (action.type) {
        case 'ADD_TASK':
            ts.push(action.payload);
            console.log(ts);
            return { tasks: ts };
        case 'DELETE_TASK':
            ts = ts.filter((e, i) => {
                if (i == action.payload)
                    return false;
                return true;
            })
            console.log(ts);
            return { tasks: ts };
        default:
            return copyState;
    }
}
export default todoReducer;