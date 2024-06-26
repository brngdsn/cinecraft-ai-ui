import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    scenes_carousel_index: 0,
    scenes: {
      busy: false,
      error: false,
      data: [{ stitle: null, cdata: { elements: [{ text: null }, { text: null }] } }],
    },
    screenwrites_carousel_index: 0,
    screenwrites: {
      busy: false,
      error: false,
      data: [{ stitle: null, ssynopsis: null, soutline: { acts: [] }, scinecrafting: 0, simage: 0 }],
    }
  },
  getters: {
    scenes: state => state.scenes.data,
    scenes_carousel: state => state.scenes.data.filter((s, i) => i <= 6),
    scenes_carousel_title: state => state.scenes.data[state.scenes_carousel_index],
    scenes_carousel_images: state => state.scenes.data.filter((s, i) => i <= 12),
    screenwrites: state => state.screenwrites.data,
    screenwrites_carousel_images: state => state.screenwrites.data
      .filter((s, i) => i <= 12)
      .map(({ sid, stitle, simage, soutline, scinecrafting }) => {
        const sdescription = soutline && soutline.acts ? soutline.acts.map(a => a.description).join(`\n`) : `Generating descriptions...`
        return ({
          scinecrafting,
          simage,
          src: `http://10.0.0.198:3000/screenwrites/${sid}/posters`,
          alt: `${stitle}`,
          stitle,
          sdescription,
        })
    }),
    screenwrites_carousel: state => state.screenwrites.data.filter((s, i) => i <= 6),
    screenwrites_carousel_title: state => state.screenwrites.data[state.screenwrites_carousel_index]
  },
  mutations: {
    SET_SCENES (state, scenes) {
      state.scenes.data = scenes
    },
    ADVANCE_SCENES (state) {
      const scene = state.scenes.data.shift()
      state.scenes.data.push(scene)
    },
    REWIND_SCENES (state) {
      const scene = state.scenes.data.pop()
      state.scenes.data.unshift(scene)
    },
    SPLICE_SCENES (state, scene) {
      state.scenes.data = state.scenes.data.map(s => s.cid === scene.cid ?  { ...s, ...scene } : s)
    },
    SET_SCREENWRITES (state, screenwrites) {
      screenwrites.reverse()
      state.screenwrites.data = screenwrites
    },
    UNSHIFT_SCREENWRITES (state, screenwrite) {
      state.screenwrites.data.unshift(screenwrite)
    },
    SPLICE_SCREENWRITES (state, screenwrite) {
      state.screenwrites.data = state.screenwrites.data.filter(s => s.sid !== screenwrite.sid)
    },
    SHIFT_SCREENWRITES (state) {
      state.screenwrites.data.shift()
    },
    ADVANCE_SCREENWRITES (state) {
      const screenwrite = state.screenwrites.data.shift()
      state.screenwrites.data.push(screenwrite)
    },
    REWIND_SCREENWRITES (state) {
      const screenwrite = state.screenwrites.data.pop()
      state.screenwrites.data.unshift(screenwrite)
    }
  },
  actions: {
    async deleteTiles ({ commit }, { cid }) {
      try {
        const response = await axios.delete(`http://10.0.0.198:3000/scenes/${cid}/storyboards/tiles`, { })
        commit('SPLICE_SCENES', { cid, cdrawing: 0, cimage: 0 })
      } catch (error) {
        console.error('Failed to fetch tiles')
        throw error
      }
    },
    async createTiles ({ commit }, { cid }) {
      try {
        const response = await axios.post(`http://10.0.0.198:3000/scenes/${cid}/storyboards/tiles`, { })
        commit('SPLICE_SCENES', { cid, cdrawing: 1 })
      } catch (error) {
        console.error('Failed to fetch tiles')
        throw error
      }
    },
    async fetchScenes ({ commit }, { sid }) {
      try {
        const response = await axios.get(`http://10.0.0.198:3000/screenwrites/${sid}/scenes`)
        commit('SET_SCENES', response.data)
      } catch (error) {
        console.error('Failed to fetch scenes')
        throw error
      }
    },
    async fetchScreenwrites ({ commit }) {
      try {
        const response = await axios.get('http://10.0.0.198:3000/users/1/screenwrites')
        commit('SET_SCREENWRITES', response.data)
      } catch (error) {
        console.error('Failed to fetch screenwrites')
        throw error
      }
    },
    async createScreenwrites ({ commit }, { prompt }) {
      try {
        commit('UNSHIFT_SCREENWRITES', { stitle: `Generating outline...`, ssynopsis: `AI is conceiving your draft...`, simage: 0, scinecrafting: 1, soutline: { acts: [] } })
        const response = await axios.post('http://10.0.0.198:3000/users/1/screenwrites/cinecraft', { prompt })
        commit('SHIFT_SCREENWRITES')
        commit('UNSHIFT_SCREENWRITES', response.data)
      } catch (error) {
        console.error('Failed to fetch screenwrites')
        throw error
      }
    },
    async deleteScreenwrites ({ commit }, { screenwrite }) {
      try {
        await axios.delete(`http://10.0.0.198:3000/screenwrites/${screenwrite.sid}`)
        commit('SPLICE_SCREENWRITES', screenwrite)
      } catch (error) {
        console.error('Failed to fetch screenwrites')
        throw error
      }
    },
  },
  modules: {
  }
})
