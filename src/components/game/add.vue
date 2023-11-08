<template>
  <div>
    <el-dialog :title="title" v-model="open" append-to-body>
      <el-form ref="form" :model="gameForm" label-width="80px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="中文名称" prop="name" style="width:400px">
              <el-input v-model="gameForm.name" placeholder="请输入游戏名称"/>
            </el-form-item>
            <el-form-item label="英文名称" prop="enName" style="width:400px">
              <el-input v-model="gameForm.enName" placeholder="请输入游戏英文名"/>
            </el-form-item>
            <el-form-item label="开发商" prop="developer" style="width:400px">
              <el-input v-model="gameForm.developer" placeholder="请输入开发商"/>
            </el-form-item>
            <el-form-item label="评分" prop="score" style="width:400px">
              <el-input v-model="gameForm.score" placeholder="请输入评分"/>
            </el-form-item>
            <el-form-item label="销售量" prop="sales" style="width:400px">
              <el-input v-model="gameForm.sales" placeholder="销售量单位：万份"/>
            </el-form-item>
            <el-form-item label="发售时间" prop="date">
              <el-date-picker v-model="gameForm.date" style="width:320px" type="date" placeholder="请选择时间"/>
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
import { addGame, editGame, getGame } from "@/api/game";

export default {
  name: "gameAdd",
  data() {
    return {
      title: "",
      open: false,
      gameForm: {
        id: undefined,
        name: "",
        enName: "",
        developer: "",
        desc: ""
      }
    }
  },
  methods: {
    reset() {
      this.gameForm = {
            id: undefined,
            name: "",
            enName: "",
            developer: "",
            desc: ""
      };
    },
    show(id) {
      this.reset();
      this.open = true;
      if (id) {
        getGame(id).then(response => {
          this.gameForm = response;
          this.title = "编辑数据";
        })
      } else {
        this.title = "创建数据";
      }
    },
    submit() {
      if (this.gameForm.id === undefined) {
        addGame(this.gameForm).then(response => {
          if (response === "保存成功") {
            ElMessage.success(response);
            this.$emit('refreshList');
            this.open = false;
          } else {
            ElMessage.error("操作失败");
          }
        });
      } else {
        editGame(this.gameForm).then(response => {
          if (response === "保存成功") {
            ElMessage.success(response);
            this.$emit('refreshList');
            this.open = false;
          } else {
            ElMessage.error("操作失败");
          }
        });
      }
    },
    cancel() {
      this.open = false;
      this.reset;
    }
  }
}
</script>

<style scoped>
    .dialog-footer {
        margin-left: 16px
    }
</style>