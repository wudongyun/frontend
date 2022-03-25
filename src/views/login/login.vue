<template>
  <div class="login-container">
    <div class="register">
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="register-form">
        <div class="title-container">
          <p class="title">登录</p>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="button">
          <el-button style="margin-left: 30px;background-color: #6b705c" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button style="margin-left: 80px;background-color: #b7b7a4" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <Foot />
  </div>
</template>

<script>
// import Indexbg from '@/components/loginpage/bg'
import Foot from '@/components/loginpage/footer'

export default {
  components: {
    Foot
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('登录成功!')
          this.$http
            .get('', { params:
                {
                  username: this.ruleForm.username,
                  password: this.ruleForm.password
                }}, { emulateJSON: true })
            .then((response) => {
              this.$store.commit('setUsername', response.data.username)
              this.$store.commit('setUserID', response.data.id)
              if (response.data.actor == '1') {
                this.$router.replace('/user')
              } else if (response.data.actor == '2') {
                this.$router.replace('/review')
              } else {
                this.$router.replace('/admin')
              }
            }).catch(err => {
              console.log(err.data)
            })
        } else {
          console.log('登录失败，请输入正确的用户名和密码')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style lang="scss" scoped>
.login-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .register{
    background-color: rgba(225, 229, 211, 0.5);
    width: 30%;
    margin: 250px auto;
    height: 40%;
    .register-form{
      margin-right: 40px;
      margin-bottom: 40px;
      .title-container {
        //position: relative;
        .title {
          font-size: 26px;
          color: #606266;
          margin: 0px auto 20px auto;
          padding-top: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>
