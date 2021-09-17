<template>
  <div>
    <div class="header ">
      <div class="header-title">
        <h3>Thêm kiểu người dùng</h3>
      </div>
      <div class="header-breadcrumb">
        <b-breadcrumb class="breadcrumb-slash">
          <b-breadcrumb-item href="#home">
            <i class="bx bx-home-alt" />
          </b-breadcrumb-item>
          <b-breadcrumb-item href="#foo">
            Chat
          </b-breadcrumb-item>
          <b-breadcrumb-item active>
            Infos
          </b-breadcrumb-item>
        </b-breadcrumb>
      </div>
    </div>
    <div class="table01">
      <div class="table__top">
        <div class="table__top__left">
          <p>Hiển thị</p>
          <!-- danger -->
          <b-dropdown
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            :text="perpage==''? '5':perpage"
            class="table__top__left__select"

            variant="flat-dark"
          >
            <b-dropdown-item
              v-for="(value,index) in select__down"
              :key="index"
              @click="perpage=value"
            >
              {{ value }}
            </b-dropdown-item>
            <b-dropdown-item
              @click="perpage=rows.length"
            >
              All
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>
              {{ perpage==''? '5':perpage }}
            </b-dropdown-item>
          </b-dropdown>

          <div class="table__top__left__button">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="danger"
              class="btn-icon table__top__left__button__item "
            >
              <feather-icon icon="Trash2Icon" />
            </b-button>
          </div>
        </div>
        <div class="table__top__right">
          <div class="table__top__right__button">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="table__top__right__button"
            >
              <feather-icon icon="PlusIcon" /> Thêm vị trí công việc
            </b-button>
          </div>
        </div>
      </div>
      <div class="table__main">
        <div>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :sort-options="{
              enabled: true,
            }"
            :select-options="{ enabled: true }"
            style-class="vgt-table"
            :pagination-options="{
              enabled: true,
              setCurrentPage: currentPage,
              perPage: perpage,
            }"
            @on-selected-rows-change="selectionChanged"
          >
            <template
              slot="table-row"
              slot-scope="props"
            >
              <span v-if="props.column.field == 'cn'">
                <span style=""><feather-icon
                  icon="EditIcon"
                  class="table__chucnang__icon"
                /><feather-icon
                  icon="Trash2Icon"
                  class="table__chucnang__icon"
                  style="margin-left:14px"
                /></span>
              </span>
            </template>
            <template
              slot="table-row"
              slot-scope="props"
            >
              <span v-if="props.column.field == 'cn'">
                <span style=""><feather-icon
                  icon="EditIcon"
                  class="table__chucnang__icon"
                /><feather-icon
                  icon="Trash2Icon"
                  class="table__chucnang__icon"
                  style="margin-left:14px"
                /></span>
              </span>
            </template>

          </vue-good-table></div>
      </div>
      <div class="table__bottom">
        <div class="table__bottom__left">
          <p>Hiển thị 1 đến {{ lastpage+perpage }} của {{ rows.length }} danh mục</p>
        </div>
        <div class="table__bottom__right">
          <div class="mt-2">
            <b-pagination
              v-model="currentPage"
              :per-page="perpage"
              pills
              :total-rows="rows.length"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {
  BPagination,
  BButton,
  BDropdown, BDropdownItem, BDropdownDivider, BBreadcrumb, BBreadcrumbItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import { mapActions } from 'vuex'

export default {
  components: {
    BPagination,
    BButton,
    VueGoodTable,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  data() {
    return {
      dau: 0,
      cuoi: 0,
      firstpage: -5,
      lastpage: 0,
      perpage: 5, // số trang hiển thị trên 1 bảng
      select__down: [5, 10, 20], // dể ghi
      currentPage: 1, // trang hiện tại
      columns: [
        {
          label: 'KIỂU NGƯỜI DÙNG',
          field: 'mvtc',
          tdClass: 'tiennguyen2507',
          filterOptions: {
            placeholder: 'Tìm kiếm', // placeholder for filter input
            customFilter: true,
            enabled: true, // enable filter for this column
            styleClass: 'class-filter', // class to be added to the parent th element
          },
        },
        {
          label: 'MÔ TẢ',
          field: 'vtcv',
          filterOptions: {
            placeholder: 'Tìm kiếm',
            // placeholder: 'Filter This Thing', // placeholder for filter input
            // filterValue: '', // initial populated value for this filter
            // filterDropdownItems: [], // dropdown (with selected values) instead of text input
            // filterFn: this.columnFilterFn, // custom filter function that
            // trigger: 'enter', // only trigger on enter not on keyup
            styleClass: 'class-filter', // class to be added to the parent th element
            enabled: true, // enable filter for this column
          },
        },
        {
          label: 'Chức năng',
          field: 'cn',
        },
      ],
      rows: [
        {
          mvtc: '00123', vtcv: 'Giám đốc', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00124', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00125', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00126', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00129', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết',
        },

      ],
    }
  },
  methods: {
    ...mapActions('userType', ['doFetchListUser']),
    // selectionChanged() {
    //   alert('Selection changed');
    // },
  },
  // eslint-disable-next-line vue/order-in-components
  created() {
    const a = this.doFetchListUser()
    console.log(a)
  },
}
</script>
<style >
.class-filter{
  border-radius:6px;
  background-color:red;
}
.table01{
background-color: white;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
border-radius: 6px;
}
[dir] .btn-primary {
  background-color: blue;
}
.table__top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.table__top__left{
  display: flex;
  align-items: center;
}
.table__top__left p{
  margin-bottom:0px;
}
.table__top__left__select{
  margin-right: 14px;
}
.table__top__right {
  display: flex;
   align-items: center;
}
.table__top__right__button{
  margin-left: 10px;
}

.table__top__left__button__item{
  margin-right: 16px;
}
.table__main{
  margin:10px 0px 77px 0px;
}
.vgt-table{
  width: 100%;
  padding-top: 10px;
}
.vgt-input{
  width: 100%;
  border: 1px solid #A6A8B0;
  box-sizing: border-box;
  border-radius: 5px;
}
/* .vgt-table thead{
  background-color: r;

} */
.vgt-table thead tr{
  height: 39px;
  border-bottom: 1px solid #CBCDD2;
  border-top: 1px solid #CBCDD2
}
.vgt-table tbody tr{
  height: 58px;
  border-bottom: 1px solid #CBCDD2
}
.checkbox{
  padding-left: 24px;
}
.vgt-checkbox-col{
  padding-left: 24px;
}
.tiennguyen2507 span{
  border-radius: 4px;
    padding: 1px 9px;
    color: #227FF4;
    width: 49px;
    background-color: rgba(34, 127, 244, 0.12);
}
.table__bottom{
  padding-left: 25px;
  padding-bottom: 17px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.table__bottom__left p{
  color:#B9B9C3;
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
margin-bottom:0px;

}
.table__chucnang{
  text-align: end;
  padding-right: 55px;
}
.table__chucnang i{
  font-size: 21px;
  cursor: pointer;
}
.table__chucnang__th{
  text-align: end;
  padding-right: 38px;
}
.footer__row-count{
  display: none;
}
.footer__navigation{
  display: none;
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
