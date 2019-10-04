<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>
  
      <el-main >
      <p style="visibility:hidden"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum, natus distinctio accusamus perferendis porro. Error, explicabo! Eius debitis quia impedit deserunt iusto voluptate, quo inventore sit dolor, labore ipsa?</p>      
        <router-view></router-view>
      </el-main>
      <el-footer height=""><my-footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue';
import MyFooter from '@/components/footer/index.vue';
export default {
  components:{
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>