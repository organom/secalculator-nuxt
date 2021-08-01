export const state = () => ({
  blocks: [],
  components: []
})

export const mutations = {
  setBlocks(state, blocks) {
    state.blocks = blocks;
  },
  addBlocks(state, block) {
    state.blocks.push(block)
  },
  removeBlocks(state, { block }) {
    state.blocks.splice(state.blocks.indexOf(block), 1)
  },
  cleanBlocks(state) {
    state.blocks = [];
  },
  setComponents(state, components) {
    state.components = components;
  },
  addComponents(state, comp) {
    state.components.push(comp)
  },
  removeComponents(state, { comp }) {
    state.components.splice(state.components.indexOf(comp), 1)
  },
  cleanComponents(state) {
    state.components = [];
  },
}
