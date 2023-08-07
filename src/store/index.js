import { createStore } from "vuex"
export default createStore({
    state: {
        all: [
            {
                title: 'Wake up',
                id: 124124124,
                folder: 1,
                date: '10 avgust',
                body: 'Wake up'
            },
            {
                title: 'Breakfast',
                id: 124326434,
                folder: 2,
                date: '9 avgust',
                body: 'Have a breakfast'
            },
            {
                title: 'Read book',
                id: 122354,
                folder: 1,
                date: '1 september',
                body: 'Read book'
            },
            {
                title: 'Library',
                id: 111,
                folder: 3,
                date: 'Today 10:00',
                body: 'Visit a library'
            },
            {
                title: 'Run',
                id: 124124124,
                folder: 4,
                date: 'Tomoroow 15:00',
                body: 'Run off-road'
            },
        ],
        folders: [
            {
                id: 1,
                title: 'Must',
                todos: [
                    {
                        title: 'Wake up',
                        id: 124124124,
                        folder: 1,
                        date: '10 avgust',
                        body: 'Wake up'
                    },
                    {
                        title: 'Read book',
                        id: 122354,
                        folder: 1,
                        date: '1 september',
                        body: 'Read book'
                    },
                ],
            },
            {
                id: 2,
                title: 'Probable',
                todos: [
                    {
                        title: 'Breakfast',
                        id: 124326434,
                        folder: 2,
                        date: '9 avgust',
                        body: 'Have a breakfast'
                    },
                ],
            },
            {
                id: 3,
                title: 'Warning',
                todos: [
                    {
                        title: 'Library',
                        id: 111,
                        folder: 3,
                        date: 'Today 10:00',
                        body: 'Visit a library'
                    },
                ],
            },
            {
                id: 4,
                title: 'Rest',
                todos: [
                    {
                        title: 'Run',
                        id: 124124124,
                        folder: 4,
                        date: 'Tomoroow 15:00',
                        body: 'Run off-road'
                    },
                ],
            },


        ],
        completed:[

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
      state.all.splice(state.all.indexOf(task) , 1)
    },
    ADD_NEW_FOLDER(state, folder) {
      state.folders.push(folder)
    },
},
    // REMOVE_FAVOURITE_MUTATION(state, item) {
    //   for(let i of state.favouties){
    // if(i.idx == item.idx){
    //   state.favouties.splice( state.favouties.indexOf(i) , 1)
    // }
    //   }
    // },
    //   },
      actions: {
    DONE_MUTATION({ commit }, task) {
      commit("DONE_MUTATION", task)
    },
    ADD_NEW_FOLDER({ commit }, folder) {
      commit("ADD_NEW_FOLDER", folder)
    },
}
    // REMOVE_FAVOURITE({ commit }, item) {
    //   commit("REMOVE_FAVOURITE_MUTATION", item)
    // },
    //   }


})
