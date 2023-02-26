<template>
  <div class="el-table">
    <el-table :data="contentList">
      <el-table-column prop="title" label="标题"/>
      <el-table-column prop="author" label="作者"/>
      <el-table-column prop="desc" label="详情"/>
    </el-table>
  </div>
</template>

<script>
import { listContent } from "@/api/content";

export default {
  name: "ContentList",
  data() {
    return {
      loading: true,
      open: false,
      contentList: []
    }
  },
  created() {
    this.getContentList();
  },
  methods: {
    getContentList() {
      this.loading = true;
      let params;
      listContent(params).then(result => {
        this.contentList = result;
      });
    }
  }
};
</script>

<style scoped>

</style>