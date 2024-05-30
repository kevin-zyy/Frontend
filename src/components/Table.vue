<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="id"
        label="订单编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderTime"
        label="订单日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total"
        label="总数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uid"
        label="用户编号"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .table-container {
    display: flex;
    justify-content: center;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>

export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  created: function() {
    this.$http.get("/user/findAll").then((response) => {
      this.tableData = response.data
    })
  },
  data() {
    return {
      tableData: []
    }
  },
}
</script>