<template>
    <div class="monitor-continer">
        <el-table :data="deviceList" style="width: 1500px">
            <el-table-column prop="deviceName" label="测试台名称" width="280"> </el-table-column>
            <el-table-column prop="lastTime" label="最近测试时间" width="280"> </el-table-column>
            <el-table-column prop="ipAddress" label="内网地址" width="280"> </el-table-column>
            <el-table-column prop="control" label="操作" width="280">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
  name: "Monitor",
  data() {
      return {
          deviceList: [{
              deviceName: '5kw',
              lastTime: '2020年11月20日',
              ipAddress: '172.16.10.55',
          },{
              deviceName: '20kw',
              lastTime: '2020年11月20日',
              ipAddress: '172.16.10.56',
          },{
              deviceName: '40kw',
              lastTime: '2020年11月20日',
              ipAddress: '172.16.10.57',
          }],
      }
  },
  methods: {},
};
</script>

<style>
.el-table {
    top: 5px;
    left: 10px;
    padding: 30px;
    line-height: 50px;
}
</style>