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
              Danh sách vị trí công việc
            </b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="listwork">
      <div class="listwork__top">
        <h4>Danh sách vị trí công việc hợp lệ</h4>
      </div>
      <div class="listwork__table__01">
        <vue-good-table
          :select-options="{ enabled: true }"
          :columns="columns"
          :rows="validWork"
          max-height="100%"
          style-class="table-listwork"
        >
          @on-selected-rows-change="selectionChanged"
          >
          <template
            slot="table-row"
            slot-scope="props"
          >
            <span v-if="props.column.field == 'score'">
              <span style="font-weight: bold; color: blue;">tiennguyen</span>
            </span>
          </template>
        </vue-good-table>
      </div>
      <div class="listwork__text__center">
        <p>Tổng cộng: {{ validWork.length }} vị trí công việc</p>
      </div>
      <div class="listwork__head__02">
        <div class="listwork__head__02__left">
          <h4>Danh sách vị trí công việc không hợp lệ</h4>
        </div>
        <div class="listwork__head__02__right">

          <b-button
            variant="primary"
            class="btn-icon"
          >
            <feather-icon icon="EditIcon" />
          </b-button>

          <div class="listwork__head__02__right__icon">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
              class="btn-icon"
            >
              <feather-icon icon="CheckCircleIcon" />
            </b-button>
          </div>

          <div />
        </div>

      </div>
      <div class="listwork__table__02">
        <vue-good-table
          :columns="columns02"
          :rows="validNoWork"
          style-class="table-listwork"
        >
          <template
            slot="table-row"
            slot-scope="props"
          >
            <span v-if="props.column.field == 'icon02'">
              <span> <feather-icon
                icon="AlertTriangleIcon"
                color="red"
              /></span>
            </span>
          </template>
        </vue-good-table>
      </div>
      <div class="listwork__text__center">
        <p>Tổng cộng: {{ validNoWork.length }} vị trí công việc</p>
      </div>

      <div class="listwork__button">
        <div class="listwork__button__item">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            Thêm vị trí công việc
          </b-button>
        </div>
        <div class="listwork__button__item">
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Hủy bỏ
          </b-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { BButton, BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'
import { mapState } from 'vuex'

export default {
  components: {
    VueGoodTable,
    BButton,
    BBreadcrumb,
    BBreadcrumbItem,

  },
  data() {
    return {
      columns: [
        {
          label: 'Mã vị trí công việc',
          field: 'code',
        },
        {
          label: 'Vị trí công việc',
          field: 'name',
        },
        {
          label: 'Mô tả công việc',
          field: 'description',
        },
        {
          label: 'Yêu cầu công việc',
          field: 'requirement',
        },
      ],
      columns02: [
        {
          label: '',
          field: 'icon02',
        },
        {
          label: 'Mã vị trí công việc',
          field: 'code',
        },
        {
          label: 'Vị trí công việc',
          field: 'name',
        },
        {
          label: 'Mô tả công việc',
          field: 'description',
        },
        {
          label: 'Yêu cầu công việc',
          field: 'requirement',
        },
      ],
    }
  },
  computed: {
    ...mapState('positionJob', ['validWork', 'validNoWork']),
  },

}
</script>

<style>
.listwork{
background: white;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
border-radius: 6px;

}

.listwork__top{
padding:20px;}
.listwork__top h4{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;

color: #181F28
}
.listwork__text__center p{
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
text-align: right;
margin-top:20px;
padding-right:20px;

}
.listwork__head__02{
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
}
.listwork__head__02__left h4{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
}
.listwork__head__02__right{
display: flex;
align-items: center;}
.listwork__head__02__right__icon{
margin-left: 20px;}

.listwork__button{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top:40px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.listwork__button__item{
  margin-left:20px
}
.table-listwork{
    width: 100%;
}
.table-listwork thead tr th{
  background-color: rgba(34, 127, 244, 0.12);
padding-left:10px ;
}

.table-listwork thead tr{
  height: 39px;
  background-color: transparent;
}
.table-listwork  tbody tr{
  height: 58px;
  border-bottom: 1px solid #CBCDD2;

}
.table-listwork  tbody tr th{
 padding-left:10px ;
}
.table-listwork  tbody tr td{
 padding-left:10px ;
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
