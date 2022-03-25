<template>
  <div class="page">
    <div class="search">
      搜索名字
      <div class="item">
        <input type="text" style="position: absolute" placeholder="输入名字进行搜索" @change="onChange">
        <el-button type="primary" class="button" @click="dialogFormVisible=true">新添咨询师</el-button>
        <el-dialog title="" :visible.sync="dialogFormVisible">
          <div style="font-size: 2em;margin-left: 20px;color: black">添加咨询师<div style="color: #6a6f77;font-size: 15px">添加督导账号并添加其个人信息</div></div>
          <el-form label-position="top" label-width="80px" size="medium " :model="form" inline="true" style="text-align: center;margin: 20px">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="个人信息" name="first">
                <el-form-item label=""><div style="text-align: left">姓名</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">性别</div>
                  <el-radio-group v-model="form.resource" style="width: 300px;text-align: left">
                    <el-radio label="男" />
                    <el-radio label="女" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">年龄</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">身份证号码</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入身份证号" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">电话</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入联系电话" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">邮箱</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入邮箱地址" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">绑定督导</div>
                  <el-select v-model="form.name" style="width: 620px" placeholder="请选择督导">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="工作信息" name="second">
                <el-form-item label=""><div style="text-align: left">用户名</div>
                  <el-input v-model="form.name" style="width: 300px" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">密码</div>
                  <el-input v-model="form.password" type="password" style="width: 300px" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">工作单位</div>
                  <el-input v-model="form.type" style="width: 300px" placeholder="请输入工作单位" />
                </el-form-item>
                <el-form-item label=""><div style="text-align: left">职称</div>
                  <el-input v-model="form.type" style="width: 300px" placeholder="请输入个人职称" />
                </el-form-item>
              </el-tab-pane>
            </el-tabs>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)" style="overflow:auto;width:100%;" height="90%" :header-cell-style="headClass">
        <!--      <el-table-column prop="id" label="编号" width="100px" />-->
        <el-table-column prop="name" label="姓名" fixed />
        <el-table-column prop="gender" label="性别" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="phone" label="电话" :formatter="stateFormat" />
        <el-table-column header-align="center" align="center" prop="operate" label="操作" width="330px" fixed="right">

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
            >修改
            </el-button>
            <el-button
              size="small"
              style="background-color: #b1c0d0"
              @click="ban(scope.row)"
            >修改排班
            </el-button>
            <el-button
              size="small"
              style="background-color: #b1c0d0"
              @click="ban(scope.row)"
            >删除
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
      dialogFormVisible: false,
      form: {
        name: ''
      },
      activeName: 'first',
      dictTotal: 0,
      dictCurrentPage: 1,
      dictPageSize: 10,
      tableData: [{
        id: '1',
        date: '2016-05-03',
        username: '王小fdsalkfslakfmdsalfl虎',
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
    handleClick(tab, event) {
      console.log(tab, event)
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
    onChange(e) {
      const { value } = e.target
      console.log('检测到变化' + value)
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
      position: relative;
      margin-top: 10px;
      margin-bottom: 10px;
      .button{
        position: relative;
        left: 91%
      }
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
