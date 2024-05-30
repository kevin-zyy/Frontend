
<template>
  <div id="layout">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goToUpload"
                >上传头像</el-dropdown-item
              >
              <el-dropdown-item @click.native="goToLogout"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <span>kevinovo</span>
        </el-header>
    <router-view></router-view>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="id" label="商品编号" width="180">
            </el-table-column>
            <el-table-column prop="orderTime" label="订单日期" width="180">
            </el-table-column>
            <el-table-column prop="total" label="总金额" width="180">
            </el-table-column>
            <el-table-column prop="uid" label="用户编号" width="180">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  created: function () {
    this.$http.get("/user/findAll").then((response) => {
      this.tableData = response.data;
    });
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    goToUpload() {
      this.$router.push('/upload');
    },
    goToLogout() {
      this.$router.push('/login');
    }
  },
  
};
</script>