<template>
  <div class="container-wrap">
    <el-dialog title="立即报修" :visible="showRepair" width="700px" :before-close="cancel">
      <div class="content-wrap">
        <el-steps :active="1" align-center finish-status="success">
          <el-step title="提交维修" description="业主提报维修需求"></el-step>
          <el-step title="维修指派" description="维修人员指派"></el-step>
          <el-step title="完成维修" description="管理员填写维修记录"></el-step>
        </el-steps>
        <div class="form-wrap">
          <div class="form-content">
            <el-form :model="form" :rules="rules" label-suffix="：" label-width="100px">
              <el-form-item label="业主电话">{{ formRepair.phone }}</el-form-item>
              <el-form-item label="业主姓名">{{ formRepair.userName }}</el-form-item>
              <el-form-item label="预约时间">{{ formRepair.handler }}</el-form-item>
              <el-form-item label="报修地址">{{ formRepair.address}}</el-form-item>
              <el-form-item label="业主问题">{{ formRepair.description}}</el-form-item>
              <el-form-item prop="repairAssigned" label="维修指派">
                <el-select v-model="form.repairAssigned" size="mini" clearable>
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <span slot="footer">
        <el-button>开始指派</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showRepair: {
      type: Boolean,
      default: false
    },
    formRepair: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      form: {
        repairAssigned: ''
      },
      rules: {
        repairAssigned: [
          {
            required: true,
            message: '该项是必填项',
            trigger: 'blur'
          }
        ]
      },
      options: [
        {
          value: '1',
          label: '你好'
        },
        {
          value: '2',
          label: '我好'
        }
      ]
    }
  },
  methods: {
    cancel () {
      this.$emit('update:showRepair', false)
    }
  }
}
</script>

<style lang="less" scoped>
.form-wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .form-content {
    width: 300px;
  }
}
.container-wrap {
  ::v-deep {
    .el-dialog__header {
      background-color: #1abc9c;
    }
    .el-dialog__title {
      color: #fff;
    }
    .el-dialog__close {
      color: #fff;
    }
    .el-button {
      background-color: #1abc9c;
      color: #fff;
    }
    .el-dialog__footer {
      text-align: center;
    }
  }
}
</style>
