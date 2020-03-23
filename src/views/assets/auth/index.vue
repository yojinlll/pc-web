<template>
  <div class="auth">
    <h1 class="page_assets-inner-title">身份认证</h1>

    <div class="auth-bar">
      <div class="tiitle">Lv.1 基础认证</div>
      <div class="inner flex row-between">
        <div>
          <p>认证后可以提币，24小时限额 100 USDT</p>
          <p>认证后可以法币交易，单笔限额 2000 CNY</p>
        </div>
        <div>
          <div class="common-btn b-btn" @click="isAuthDialogVisible = true">去认证</div>
        </div>
      </div>
    </div>

    <el-dialog
      title="基础认证"
      center
      :visible.sync="isAuthDialogVisible"
      width="500px"
      custom-class="auth-dialog">
      <div class="auth-dialog-main">
        <p>请输入身份信息</p>
        <el-form
          label-position="left"
          label-width="100px"
          :model="authForm"
          :rules="authRules"
          ref="authForm"
        >
          <el-form-item label="国籍" prop="area">
            <el-input v-model="authForm.area" placeholder="请输入国籍" />
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="authForm.name" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item label="身份证号" prop="id">
            <el-input v-model="authForm.id" placeholder="请输入身份证号"/>
          </el-form-item>
      </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="common-btn b-btn" @click="submitForm('authForm')">确定</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog, Form, FormItem, Input } from 'element-ui'

// auth rules
const validateArea = (rule, value, callback) => {
  return value ? callback() : callback(new Error('国籍不能为空'))
};
const validateName = (rule, value, callback) => {
  return value ? callback() : callback(new Error('姓名不能为空'))
};
const validateId = (rule, value, callback) => {
  return value ? callback() : callback(new Error('身份证号不能为空'))
}

export default {
  name: "Auth",
  components: {
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
  },
  data() {
    return {
      isAuthDialogVisible: true,
      authForm: {
        area: '',
        name: '',
        id: '',
      },
      authRules: {
        area: [
          { validator: validateArea, trigger: 'blur' }
        ],
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        id: [
          { validator: validateId }
        ]
      }
    }
  },
  watch:{
    isAuthDialogVisible() {
      if(!this.isAuthDialogVisible){
        this.$refs['authForm'].resetFields();
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('-----', valid);
        } else {
          console.log('error submit!!', valid);
          return false;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth{ padding: 20px; }
.common-btn{ color: #fff; font-weight: 400; }
.auth-bar{
  margin-top: 40px;
  padding: 20px 20px 40px;
  background-color: #34353D;
  border-radius: 6px;

  .tiitle{ margin-bottom: 20px; }
}
.dialog-footer > .common-btn{
  padding: 14px 60px;
}
.auth-dialog-main{
  color: #fff;

  p{ margin-bottom: 20px; }
}

/deep/ .auth-dialog{ background-color: #34353D; border-radius: 8px; color: #fff;}
/deep/ .el-dialog__title{ color: #fff; }
/deep/ .el-dialog__close{ font-size: 2em; }
/deep/ .el-dialog__headerbtn{ transform: translate(30%, -30%); }
/deep/ .el-form-item{ border-bottom: 1px solid #838383; }
/deep/ .el-form-item__label{ color: #fff; }
/deep/ .el-input__inner{
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 0;
}
</style>