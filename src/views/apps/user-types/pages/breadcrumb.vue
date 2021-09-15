<template>
  <div>
    <div class="header ">
      <div class="header-title">
        <h3>Vị trí công việc</h3>
      </div>
      <div class="header-breadcrumb">
        <b-breadcrumb
          class="breadcrumb-slash"
        >
          <b-breadcrumb-item href="#">
            <i class="bx bx-home-alt" />
          </b-breadcrumb-item>
          <b-breadcrumb-item href="#">

            Quản lý đơn vị
          </b-breadcrumb-item>
          <b-breadcrumb-item href="#">
            Vị trí công việc
          </b-breadcrumb-item>
          <b-breadcrumb-item active>
            Danh sách vị trí công việc
          </b-breadcrumb-item>
        </b-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'

export default {
  name: 'Breadcrumb',
  components: { BBreadcrumb, BBreadcrumbItem },
}
</script>

<style>
/* Breadcrumb  */
.header{
display:flex;
margin-bottom: 32px;

}
.header-title{
height:26px;
font-weight: 500;
font-size: 21px;
line-height:25,6px;
padding-right: 20px;
position: relative;
color:#2E3A4A;
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
height:21px;
line-height:21px;
display: flex;
align-content: center;
padding: 0;
}
a {
    color: #227FF4;
    text-decoration: none;
}
.breadcrumb-item.active {
    color: #2E3A4A;
}
[dir] .breadcrumb{
padding-left: 20px;
}
/* end breadcrumb */
</style>
