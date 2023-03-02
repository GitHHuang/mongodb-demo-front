<template>
  <div>
    <el-form :model="queryParams" ref="queryForm" size="small">
      <el-form-item label="名称" prop="name">
        <el-input v-model="queryParams.name" @keyup.enter="getGameList"/>
      </el-form-item>
    </el-form>


    <el-row>
      <el-col :span="1.5">
        <el-button type="primary" size="mini" @click="getGameList">查询</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="primary" size="mini" @click="addGame">新增</el-button>
      </el-col>
    </el-row>


    <el-table :data="gameList" border="true" highlight-current-row="true" fit="false">
      <el-table-column prop="name" label="游戏名" width="100px"/>
      <el-table-column class="mongo-column" prop="enName" label="英文名"/>
      <el-table-column prop="developer" label="开发商"/>
      <el-table-column prop="date" type="date" label="发售时间"/>
    </el-table>


  </div>

  <game-add ref="gameAdd"></game-add>
</template>

<script>
import {listGame} from "@/api/game";
import gameAdd from "@/components/game/add";

export default {
  name: "gameList",
  components: {gameAdd},
  data() {
    return {
      loading: true,
      open: false,
      gameList: [],
      queryParams: {}
    }
  },
  created() {
    this.getGameList();
  },
  methods: {
    getGameList(queryParams) {
      this.loading = true;
      listGame(queryParams).then(result => {
        this.gameList = result;
      });
    },
    addGame() {
      this.$refs.gameAdd.show();
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