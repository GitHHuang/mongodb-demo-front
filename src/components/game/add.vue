<template>
  <div>
    <el-dialog :title="title" v-model="open" append-to-body>
      <el-form ref="form" :model="gameForm" label-width="80px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="中文名称" prop="name">
              <el-input v-model="gameForm.name" placeholder="请输入游戏名称"/>
            </el-form-item>
            <el-form-item label="英文名称" prop="enName">
              <el-input v-model="gameForm.enName" placeholder="请输入游戏英文名"/>
            </el-form-item>
            <el-form-item label="开发商" prop="developer">
              <el-input v-model="gameForm.developer" placeholder="请输入开发商"/>
            </el-form-item>
            <el-form-item label="内容概述" prop="desc">
              <el-input v-model="gameForm.desc" placeholder="" type="textarea" :rows="5"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="submit" type="primary">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { addGame, editGame } from "@/api/game";

export default {
  name: "gameAdd",
  data() {
    return {
      title: "",
      open: false,
      gameForm: {
        id: "",
        name: "",
        enName: "",
        developer: "",
        desc: ""
      }
    }
  },
  methods: {
    show() {
      this.gameForm = {};
      this.open = true;
    },
    submit() {
      if (this.gameForm.id === undefined) {
        addGame(this.gameForm).then(response => {
          if (response === "保存成功") {
            ElMessage.success(response);
            this.open = false;
          } else {
            ElMessage.error("操作失败");
          }
        });
      } else {
        editGame(this.gameForm).then(response => {
          if (response === "保存成功") {
            ElMessage.success(response);
            this.open = false;
          } else {
            ElMessage.error("操作失败");
          }
        });
      }
    },
    cancel() {
      this.open = false;
      this.gameForm = {};
    }
  }
}
</script>

<style scoped>

</style>