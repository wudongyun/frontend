<template>
  <div class="page">
    <div class="search">
      <div style="display: inline-block;width: 250px">
        搜索名字
        <div class="item">
          <el-input v-model="name" placeholder="请输入内容" @input="seachRecord" />
        </div>
      </div>
      <div style="display: inline-block;margin-left: 30px">
        选择日期
        <div class="item">
          <el-date-picker
            v-model="time"
            type="date"
            placeholder="选择日期"
            value-format="“yyyy-MM-dd”"
            @change="seachRecord"
          />
        </div>
      </div>

    </div>
    <div class="table">
      <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)" style="overflow:auto;width:100%;" height="90%" :header-cell-style="headClass">
        <el-table-column prop="name" label="" fixed />
        <el-table-column prop="gender" label="性别" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="phone" label="电话" :formatter="stateFormat" />
        <el-table-column header-align="center" align="center" prop="operate" label="操作" width="200px" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="small"
              style="background-color: #b1c0d0"
              @click="ban(scope.row)"
            >查看详情
            </el-button>
            <el-button
              size="small"
              style="background-color: #b1c0d0"
              @click="ban(scope.row)"
            >导出记录
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="fy"
        layout="sizes, prev, pager, next, total"
        :current-page.sync="dictCurrentPage"
        :total="dictTotal"
        background
        :page-sizes="[10, 20, 30, 40]"
        :page-size.sync="dictPageSize"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dictTotal: 0,
      dictCurrentPage: 1,
      dictPageSize: 10,
      name: '',
      time: '',
      tableData: [{
        id: '1',
        date: '2016-05-03',
        username: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 0,
        sex: '1',
        role: 1
      }, {
        id: '2',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 1,
        sex: '0'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }, {
        id: '3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit: 10,
        sex: '-1'
      }]
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.dictTotal = this.tableData.length

      this.$http
        .get('http://175.27.129.16:8080/paperplane2021/UserServlet', {
          params:
            { method: 'list',
              actor: 1
            }}, { emulateJSON: true })
        .then((response) => {
          this.tableData = response.data
        }).catch(err => {
          console.log(err.data)
        })
    },
    ban(row) {
      // this.$router.push({
      //   path: '/admin/des',
      //   // name: 'mallList',
      //   query: {
      //     parms: row
      //   }
      // })
    },
    stateFormat(row, column) {
      // console.log('ces')
      // if (row.actor === 1) {
      //   return '投稿人'
      // } else if (row.actor === 2) {
      //   return '审稿人'
      // } else {
      //   return '管理员'
      // }
    },
    // 设置表头颜色
    headClass() {
      return 'background:#e1e9f4;'
    },
    // 实时监听查询内容，更新列表
    seachRecord() {
      console.log('检测到变化' + this.name + this.time)
    }

  }
}
</script>

<style lang="scss" scoped>
input[type="text"],#btn1,#btn2{
  box-sizing: border-box;
  text-align:left;
  font-size:1em;
  height:2.5em;
  border-radius:4px;
  border:1px solid #c8cccf;
  color:#6a6f77;
  -web-kit-appearance:none;
  -moz-appearance: none;
  display:block;
  outline:0;
  padding:0 1em;
  text-decoration:none;
  width:20%;
}
input[type="text"]:focus{
  border:1px solid #5498e5;
}
.page {
  height: 95%;
  position: relative;
  margin-top: 20px;
  .search{
    margin-left: 1%;
    text-align: left;
    .item{
      margin-top: 10px;
      margin-bottom: 10px;
      width: 250px;
    }
  }
  .table{
    width: 98%;
    margin: 0 auto;
    height: 88%;
    .fy {
      height: 10%;
      position: absolute;
      margin-top: 20px;
      right: 10px;
    }
  }
}
</style>
