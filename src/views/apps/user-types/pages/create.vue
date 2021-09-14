<template>
  <div>
    <div class="header ">
      <div class="header-title">
        <h3>Thêm kiểu người dùng</h3>
      </div>
      <div class="header-breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <a href="/"><i class="bx bx-home-alt" /></a>
          </el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Quản lý đơn vị</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Kiểu người dùng</a></el-breadcrumb-item>
          <el-breadcrumb-item>Thêm kiểu người dùng</el-breadcrumb-item>

        </el-breadcrumb>
      </div>
    </div>
    <div class="form">
      <div class="wrap">
        <div class="form-input">
          <div class="item">
            <label class="item-label">Tên kiểu người dùng (*)</label>
            <el-input
              placeholder="Please input"
              class="input-type"
            />
          </div>
          <div class="item">
            <label class="item-label">Mô tả</label>
            <el-input
              placeholder="Please input"
            />
          </div>

        </div>

        <div class="form-tree">
          <el-tree
            :data="data"
            :props="defaultProps"
            show-checkbox
            class="el-tree"
            @check-change="handleCheckChange"
          />

        </div>
        <div class="card__button">
          <button class="card__button-item card__button__add">
            Thêm mới
          </button>
          <button class="card__button-item card__button__close">
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      data: [{
        id: 1,
        label: 'Level one 1',
        children: [{
          id: 3,
          label: 'Level two 2-1',
          children: [{
            id: 4,
            label: 'Level three 3-1-1',
          }, {
            id: 5,
            label: 'Level three 3-1-2',

          }],
        }, {
          id: 2,
          label: 'Level two 2-2',

          children: [{
            id: 6,
            label: 'Level three 3-2-1',
          }, {
            id: 7,
            label: 'Level three 3-2-2',

          }],
        }],
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
        disabled: 'disabled',
      },
    }
  },
  created() {
    this.doFetchListUser()
  },
  methods: {
    ...mapActions('userType', ['doFetchListUser']),
  },
}
</script>
<style scoped>
*{
  font-family: Montserrat;
   padding: 0px;
        margin: 0px;
        border: 0px;
        box-sizing: border-box;
        scroll-behavior: smooth;

}
.header{
display:flex;
margin-bottom: 32px;

}
.header-title{
height:26px;
font-weight: 500;
font-size: 21px;
line-height:26px;
padding-right: 20px;
position: relative;
}
.header-title::after{
  content:"";
  display: block;
  position: absolute;

    right: 0;
    top: 0;

    width:1px;
    height:26px;
    background-color: #CBCDD2;
}
.header-breadcrumb{
font-size:14px;
height:26px;
line-height:26px;
display: flex;
align-content: center;
margin-left: 20px;
}
.el-breadcrumb {
    font-size: 14px;
    line-height: 28px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #227FF4;
}

/* form  */
.form{
  border-radius: 6px;
  background-color: #FFFFFF;

}
.wrap{
  padding: 20px;
  width: 100%;
}
.form-input{

  display: flex;
  justify-content:space-between;
  width: 100%;
}
.item{
  width: calc(50% - 20px)
}

.item-label{
  display: block;
  height:18px;
  font-size:12px;
  list-style: 18px;
  font-weight: 400;
  margin-bottom: 2px;

}
.form-tree{
  margin-top: 20px;
  width:100%;
  padding:20px;
  border-radius: 6px;
  border: 1px solid #A6A8B0;
box-sizing: border-box;
border-radius: 6px;

}
.el-tree {
    position: relative;
    cursor: default;
    background: #FFF;
    color: #2E3A4A;
    font-size:14px;
    line-height:21px;
}
/* end-form */
.card__button{
  display: flex;
  justify-content:flex-end;
  margin-top:49px;
}
  .card__button__add{
        width: 120px;
        height: 37px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        background-color: #227FF4;
        border-radius: 5px;
        margin: 0px 8px;
        color: #FFFFFF;
        cursor: pointer;
        border: 0px;

    }

    .card__button__close{
        width: 120px;
        height: 37px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin: 0px 0px 0 8px;
        color: #227FF4;
        border: 1px solid #227FF4;
        cursor: pointer;
    }
    .card__button-item:hover{
      opacity: 0.5;
    }
/* .input-type:first-child{
margin-right: 20px;

} */
</style>
