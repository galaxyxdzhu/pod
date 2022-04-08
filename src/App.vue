<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { checkBrowserPlatformIsPc } from '@/utils/common'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  created() {
    const isPc = checkBrowserPlatformIsPc()
    this.setPlatform(isPc)
  },
  methods: {
    ...mapMutations({
      setPlatform: 'common/SET_PLATFORM_STATUS',
      initPodInfo: 'common/INIT_POD_INFO'
    })
  }
}
</script>

<style>
</style>
