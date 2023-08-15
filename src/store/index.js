import { createStore } from "vuex"
export default createStore({
    state: {
        all: [
       
        ],
        folders: [
            
        ],
        completed: [

        ]
    },
    getters: {
        allTodos: (state) => state.all,
        folders: (state) => state.folders,
        completed: (state) => state.completed
    },

    mutations: {
        DONE_MUTATION(state, task) {
            state.completed.push(task)
            state.all.splice(state.all.indexOf(task), 1)
        },
        ADD_NEW_FOLDER(state, folder) {
            state.folders.push(folder)
        },
        ADD_NEW_NOTE(state, note) {
            state.all.push(note)
        },
    },
    actions: {
        DONE_MUTATION({ commit }, task) {
            commit("DONE_MUTATION", task)
        },
        ADD_NEW_FOLDER({ commit }, folder) {
            commit("ADD_NEW_FOLDER", folder)
        },
        ADD_NEW_NOTE({ commit }, note) {
            commit("ADD_NEW_NOTE", note)
        },
    }
    // REMOVE_FAVOURITE({ commit }, item) {
    //   commit("REMOVE_FAVOURITE_MUTATION", item)
    // },
    //   }


})

