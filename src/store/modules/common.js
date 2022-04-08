const state = {
  isPc: true,
  uniqueId: '',
  backPath: '',
  savePath: ''
}

const mutations = {
  SET_PLATFORM_STATUS: (state, isPc) => {
    state.isPc = isPc
  },
  INIT_POD_INFO: (state, payload) => {
    const { backPath, productId, savePath } = payload
    state.backPath = backPath
    state.uniqueId = productId
    state.savePath = savePath
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
