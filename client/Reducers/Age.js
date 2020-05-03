let initState = {
    age: 22,
    name: 'qasim ali',
    address: '37A New Delhi'
}
const ageReducer = (copyState = initState, action) => {
    let st = {}
    Object.assign(st, copyState);
    switch (action.type) {
        case 'AGE_UP':
            st.age += action.payload
            console.log(st);
            return st;
        case 'AGE_DOWN':
            st.age -= action.payload;
            console.log(st);
            return st;
        default:
            return copyState;
    }
}
export default ageReducer;