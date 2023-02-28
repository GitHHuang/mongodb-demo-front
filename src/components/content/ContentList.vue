<template>
  <div>
    <el-table :data="contentList" border="true" highlight-current-row="true" fit="false">
      <el-table-column prop="title" label="标题" width="100px"/>
      <el-table-column class="mongo-column" prop="author" label="作者"/>
      <el-table-column prop="desc" label="详情"/>
    </el-table>
  </div>
</template>

<script>
import {listContent} from "@/api/content";

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

.el-table {

}

.el-table-column {
  width: 200px;
}

.mongo-column {
  width: 100px;
}
</style>