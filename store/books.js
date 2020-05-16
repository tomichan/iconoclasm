/* eslint-disable no-unused-vars */
export const state = () => ({
  list: []
})

export const mutations = {
  gotList(state, data) {
    state.list = data
  }
}

export const actions = {
  async getList({ commit }) {
    const snapShot  = await this.$firebase.firestore().collection('books').get()
    const books = snapShot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    commit('gotList', books)
  },
  async add({ dispatch }, book) {
    await this.$firebase.firestore().collection('books').add(book)
    dispatch('getList')
  }
}
