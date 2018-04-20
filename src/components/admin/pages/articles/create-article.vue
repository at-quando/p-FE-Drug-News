<template>
  <div id="new-article">
    <h1>CreateArticle</h1>
    <div class="grid-content bg-purple">
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Title">
          <el-input type="text" v-model="ruleForm2.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="ruleForm2.categoryId" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Content">
          <quill-editor v-model="ruleForm2.content"
            ref="myQuillEditor"
            :options="editorOption">
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
          <el-button @click="resetForm('ruleForm2')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {quillEditor} from 'vue-quill-editor'
import { mapActions } from 'vuex'
import * as types from '../../../../store/types'

export default {
  name: 'CreateArticle',
  data () {
    return {
      ruleForm2: {
        title: '',
        categoryId: '',
        content: ''
      },
      imageList: [],
      linkImg: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    ...mapActions({
      getLinkImg: types.UPLOAD_IMG,
      createArticle: types.CREATE_ARTICLE
    }),
    onEditorChange (value) {
      var img = document.createElement('img')
      this.imageList.push(value)
      img.src = this.$options.filters.takeImage(value)
      this.editContent += img.outerHTML
      this.ruleForm2.content = this.editContent
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createArticle(this.$refs[formName]._props.model).then(res => {
            this.$router.push({ name: 'Admin ShowArticle', params: { id: res.body._id } })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
    document.getElementsByClassName('ql-image')[0].onclick = () => {
      this.editContent = this.ruleForm2.content
      document.getElementsByClassName('ql-image')[1].onchange = () => {
        this.getLinkImg(event.target.files[0]).then(res => {
          this.linkImg = res.body.link
        }).catch(function (e) {
          console.log(e)
        })
      }
    }
  },
  watch: {
    linkImg: function (value) {
      this.onEditorChange(value)
    }
  }
}
</script>
<style lang="scss">
  @import 'quill/dist/quill.core.css';
  @import 'quill/dist/quill.snow.css';
  @import 'quill/dist/quill.bubble.css';
</style>
