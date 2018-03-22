<template>
  <div id="login">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple">
          <h2>Login</h2>
          <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="120px" class="demo-ruleForm">
            <el-form-item label="Email" prop="email">
              <el-input type="text" v-model="ruleForm2.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
              <el-button @click="resetForm('ruleForm2')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import * as types from '../../../store/types'

export default {
  name: 'Login',
  data () {
    return {
      ruleForm2: {
        pass: '',
        email: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.$refs[formName]._props.model).then(res => {
            this.$router.push({ path: `/admin` })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    ...mapActions({
      login: types.LOGIN
    })
  }
}
</script>
<style>
#login {
  padding-top: 5rem;
}
</style>
