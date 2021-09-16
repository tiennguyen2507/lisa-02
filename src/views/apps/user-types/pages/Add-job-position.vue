<template>
  <div>
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
              Thêm vị trí công việc
            </b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="addwork">
      <b-row>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >
          <div class="addwork__item">
            <b-form-group
              label="Tên vị trí công việc(*)"
              label-for="basicInput"
            >
              <b-form-input
                id="basicInput"
                placeholder=""
              />
            </b-form-group>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >
          <div class="addwork__item">
            <b-form-group
              label="Mã vị trí công việc(*)"
              label-for="basicInput"
            >
              <b-form-input
                id="basicInput"
                placeholder=""
              />
            </b-form-group>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >
          <div>
            <label for="textarea-default">Mô tả công việc</label>
            <b-form-textarea
              id="textarea-default"
              placeholder=""
              rows="3"
            />
          </div>
        </b-col>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >
          <div>
            <label for="textarea-default">Yêu cầu cộng việc</label>
            <b-form-textarea
              id="textarea-default"
              placeholder=""
              rows="3"
            />
          </div>
        </b-col>
      </b-row>
      <div class="addwork__button">
        <div class="addwork__button__item">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            Thêm mới
          </b-button>
        </div>
        <div class="addwork__button__item">
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Hủy bỏ
          </b-button>
        </div>

      </div>
    </div></div>

</template>

<script>import {
  BFormInput, BRow, BCol, BFormGroup, BFormTextarea, BButton, BBreadcrumb, BBreadcrumbItem,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BFormTextarea,
    BBreadcrumb,
    BBreadcrumbItem,
  },
}
</script>

<style>
.addwork{
  background: white;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
border-radius: 6px;
padding:20px;
}
.addwork__button{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top:40px;
}
.addwork__button__item{
  margin-left:20px
}

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
