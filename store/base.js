export const state = () => ({
  blocks: []
})

export const mutations = {
  setBlocks(state, blocks) {
    state.blocks = blocks;
  },
  addBlocks(state, comp) {
    state.blocks.push(comp)
  },
  removeBlocks(state, { comp }) {
    state.blocks.splice(state.blocks.indexOf(comp), 1)
  },
  cleanBlocks(state) {
    state.blocks = [];
  },
}
