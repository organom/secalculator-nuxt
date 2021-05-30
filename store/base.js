export const state = () => ({
  blocks: []
})

export const mutations = {
  add(state, comp) {
    state.blocks.push(comp)
  },
  remove(state, { comp }) {
    state.blocks.splice(state.blocks.indexOf(comp), 1)
  },
  clean(state) {
    state.blocks = [];
  },
}
