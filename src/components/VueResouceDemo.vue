<template>
  <el-table
    :data="tableData"
    selection-mode="multiple"
    style="width: 100%"
    border
     >
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      inline-template
      label="日期"
      width="120">
      <div>{{ row.date }}</div>
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址"
      width="300"
      align="left">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
        multipleSelection: []
      }
    },
    created () {
      console.log('redy')
      this.$http.get('http://localhost:8080/mock/vueresouce', {}).then((response) => {
        console.log(response)
        // get status
        response.status
        // get status text
        response.statusText
        // get 'Expires' header
        response.headers.get('Expires')
        // set data on vm
        this.tableData = response.body
      }, (response) => {
        // error callback
      })
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>
