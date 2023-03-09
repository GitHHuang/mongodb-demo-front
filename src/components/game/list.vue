<template>
  <div>
    <el-form :model="queryParams" ref="queryForm" size="small">
      <el-row :gutter="10">
        <el-form-item label="名称" prop="name" style="width:200px">
            <el-input v-model="queryParams.name" @keyup.enter="getGameList"/>
        </el-form-item>
        <el-col :span="1.5">
          <el-button type="primary" size="mini" @click="getGameList">查询</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button type="primary" size="mini" @click="addGame">新增</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="gameList" border="true" highlight-current-row="true" fit="false">
      <el-table-column prop="name" label="游戏名"/>
      <el-table-column class="mongo-column" prop="enName" label="英文名"/>
      <el-table-column prop="developer" label="开发商"/>
      <el-table-column prop="score" label="评分"/>
      <el-table-column prop="sales" label="销售量">
        <template #default="scope">
          {{scope.row.sales || '不详'}}<span v-if="scope.row.sales>0">万份</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" type="date" label="发售时间"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" type="text" @click="editGame(scope.row)">修改</el-button>
          <el-button size="mini" type="text" @click="editGame(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

  <game-add ref="gameAdd"></game-add>
</template>

<script>
import {listGame} from "@/api/game";
import gameAdd from "@/components/game/add";

export default {
  name: "GameList",
  components: {gameAdd},
  data() {
    return {
      open: false,
      gameList: [],
      queryParams: {
        name: "",
        developer: "粉丝",
      }
    }
  },
  created() {
    this.getGameList();
  },
  methods: {
    getGameList() {
      listGame(this.queryParams).then(response => {
        this.gameList = response;
      });
    },
    addGame() {
      this.$refs.gameAdd.show();
    },
    editGame(row) {
      this.$refs.gameAdd.show(row.id);
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