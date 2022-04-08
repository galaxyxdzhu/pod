<template>
  <div class="layout">{{ uniqueId }}</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Layout-Pannel',
  computed: {
    ...mapGetters(['uniqueId'])
  },
  created() {
    this.initPrductInfoByRouter()
  },
  methods: {
    ...mapMutations({
      initPodInfo: 'common/INIT_POD_INFO'
    }),
    /**
     * 从地址中获取pod相关信息
     */
    initPrductInfoByRouter() {
      const info = this.$route.query
      this.initPodInfo(info)
    }
  }
}
</script>

<style>
</style>
