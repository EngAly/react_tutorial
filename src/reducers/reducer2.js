
//reducer2
const reduce = (state = [], action) => {
    if (action.type == "split") {
        return action.data.split(' ')
    } else if (action.type == "add") {
        return state.push(action.data)

    }
}