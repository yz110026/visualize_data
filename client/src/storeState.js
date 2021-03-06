import { createStore, action, thunk, computed } from "easy-peasy";


export default createStore({
    files: [],
    setFiles: action((state, payload) => {
        state.files = payload
    }),
    fileName: '',
    setFileName: action((state, payload) => {
        state.fileName = payload
    }),
    fileContent: [],
    setFileContent: action((state, payload) => {
        state.fileContent = payload
    }),
    userName: '',
    setUserName: action((state, payload) => {
        state.userName = payload
    }),
    ifLogin: false,
    setIfLogin: action((state, payload) => {
        state.ifLogin = payload
    })
});