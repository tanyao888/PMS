<template>
  <div class="wrap-container">
    <div class="header-wrap"></div>
    <div class="search-wrap">
      <el-row type="flex">
        <el-form :model="searchForm" size="mini" class="searchForm">
          <el-col :span="8">
            <el-form-item prop="searchContent">
              <el-input placeholder="请输入搜索的内容" v-model="searchForm.content" style="width: 220px" clearable>
                <el-button slot="append" icon="el-icon-search">搜索</el-button>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="state">
              <el-select v-model="searchForm.state" style="width: 220px" clearable filterable>
                <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="date">
              <el-date-picker v-model="searchForm.date" type="daterange" clearable range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width: 440px">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
    <div class="action">
      <el-button size="mini" style="background-color: #1abc9c;color: white">电话报修</el-button>
      <el-button size="mini" style="background-color: #1abc9c;color: white">维修员</el-button>
      <el-button size="mini">删除</el-button>
    </div>
    <div class="table-wrap">
      <el-table :data="tableData" border fit>
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="userName" label="业主姓名" align="center"></el-table-column>
        <el-table-column prop="phone" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="address" label="报修地址" align="center"></el-table-column>
        <el-table-column prop="state" label="状态" align="center"></el-table-column>
        <el-table-column prop="description" label="描述" align="center"></el-table-column>
        <el-table-column prop="image" label="报修图片" align="center"></el-table-column>
        <el-table-column prop="handler" label="预约时间" align="center"></el-table-column>
        <el-table-column prop="repairTime" label="报修时间" align="center"></el-table-column>
        <el-table-column prop="setting" label="设置" align="center" width="150px">
          <template slot-scope="scope">
            <el-row type="flex" :gutter="10">
              <el-col>
                <el-button size="mini" style="background-color: #1abc9c;color: white" @click="editBtn(scope.row)">报修</el-button>
              </el-col>
              <el-col>
                <el-button type="danger" size="mini" @click="deleteBtn(scope.row)">删除</el-button>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <repair-dialog :showRepair.sync="showRepair" :formRepair="formRepair" />
  </div>
</template>

<script>
import repairDialog from '../dialog/repair-dialog.vue'
export default {
  components: {
    repairDialog
  },
  data () {
    return {
      formRepair: {},
      searchForm: {
        content: '',
        state: ''
      },
      stateOptions: [
        {
          value: '1',
          label: '已报修'
        },
        {
          value: '2',
          label: '未报修'
        }
      ],
      tableData: [
        {
          userName: '张三',
          phone: '13589366657',
          address: '江山帝景B区3栋13楼305室',
          state: '待维修',
          description: '早上我们电梯就停了，中午修不好，我就告你们物业',
          image: [],
          handler: '2020-04-27',
          repairTime: '2020-0430'
        },
        {
          userName: '李四',
          phone: '13589366657',
          address: '江山帝景B区3栋13楼305室',
          state: '待维修',
          description: '早上我们电梯就停了，中午修不好，我就告你们物业',
          image: [],
          handler: '2020-04-27',
          repairTime: '2020-0430'
        }
      ],
      showRepair: false
    }
  },
  methods: {
    editBtn (row) {
      this.showRepair = true
      this.formRepair = row
    },
    deleteBtn () {

    }
  }
}
</script>

<style lang='less' scoped>
.wrap-container {
  padding: 0;
}
.header-wrap {
  height: 40px;
  border-bottom: 1px solid #eeeeee;
}
.searchForm {
  padding-top: 20px;
  ::v-deep.el-button--default {
    background-color: #1abc9c;
    color: white;
  }
}
.action {
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid #eeeeee;
}
</style>
