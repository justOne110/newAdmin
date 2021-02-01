<template>
  <div class="wrap">
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品名称
      </p>
      <p>
        <el-input type="text"></el-input>
      </p>
    </div>
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品描述
      </p>
      <p>
        <el-input type="text"></el-input>
      </p>
    </div>
    <!-- <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        当前状态
      </p>
      <p v-if="list.status == 1">在售</p>
      <p v-else>已下架</p>
    </div> -->
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        所属分类
      </p>
      <p style="display: flex">
        <el-select
          v-model="categoryVal"
          placeholder="请选择"
          @change="selectChange($event)"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-select v-model="classfiyVal" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </p>
    </div>
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品价格
      </p>
      <p>
        <el-input>
          <template slot="append">元</template>
        </el-input>
      </p>
    </div>
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品库存
      </p>
      <p>
        <el-input>
          <template slot="append">件</template>
        </el-input>
      </p>
    </div>
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品图片
      </p>
      <p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </p>
    </div>
    <div>
      <p style="font-size: 18px; font-weight: bold; margin-right: 30px">
        商品详情
      </p>

      <!-- 富文本 -->
      <div class="edit_container">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
        <el-button type="primary" v-on:click="saveHtml">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   id: 0, // 详情id
      list: [], // 详情数据
      options: [], // 一级分类
      categoryVal: "", // 一级分类的双向绑定
      options2: [], // 二级分类
      classfiyVal: "", // 二级分类的双向绑定
      content: `<h2>文本编辑</h2>`,
      editorOption: {},
    };
  },
  created() {
    // this.id = this.$route.query.id;
    // this.getUser();
    this.getCategory();
  },
  mounted() {},
  methods: {
    // 获取一级分类
    async getCategory() {
      let data = {
        categoryId: 0,
      };
      let { data: res } = await this.$axios.category(data);
      // console.log(res)
      this.options = res.data;
    },
    // 点击一级分类
    selectChange(val) {
      console.log(val);
      this.classfiy(val);
    },
    // 获取二级分类
    async classfiy(val) {
      //  console.log(this.categoryVal)
      let data = {
        categoryId: val,
      };
      console.log(data);
      let { data: res } = await this.$axios.classfiy(data);
      // console.log(res)
      this.options2 = res.data;
    },

    // 富文本编辑器
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function (event) {
      // alert(this.content);
      this.$message.success("提交成功！");
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 18px 40px 18px 200px;
  & > div {
    height: 50px;
    display: flex;
    align-items: center;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.quill-editor {
  margin-top: 140px;
  width: 100%;
  // min-height: 500px;
}
.ql-container {
  min-height: 500px;
}
</style>
