<template>

  <div class="table01">
    <div class="table__top">
      <div class="table__top__left">
        <p>hiển thị</p>
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

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="btn-icon table__top__left__button__item"
          >
            <feather-icon icon="Link2Icon" />

          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            class="btn-icon table__top__left__button__item"
            disabled
          >
            <feather-icon icon="DownloadIcon" />
          </b-button>
        </div>
      </div>
      <div class="table__top__right">
        <div class="table__top__right__seach">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="SearchIcon" />
            </b-input-group-prepend>
            <b-form-input placeholder="Tìm kiếm" />
          </b-input-group>
        </div>
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
          :select-options="{ enabled: true }"
          style-class="vgt-table"
          :pagination-options="{
            enabled: true,
            infoFn: (params) => `Showing ${params.firstRecordOnPage} to ${params.lastRecordOnPage} of page ${params.currentPage}`,
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
          />
        </vue-good-table></div>
    </div>
    <div class="table__bottom">
      <div class="table__bottom__left">
        <p>Hiển thị {{ firstpage+perpage }} đến {{ lastpage+perpage }} của {{ rows.length }} danh mục</p>
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

</template>

<script>
import {
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BButton,
  BDropdown, BDropdownItem, BDropdownDivider,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'

export default {
  components: {
    BInputGroup,
    BPagination,
    BFormInput,
    BInputGroupPrepend,
    BButton,
    VueGoodTable,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  data() {
    return {
      firstpage: -5,
      lastpage: 0,
      perpage: 5, // số trang hiển thị trên 1 bảng
      select__down: [5, 10, 20], // dể ghi
      currentPage: 1, // trang hiện tại
      columns: [
        {
          label: 'Mã vị trí công việc',
          field: 'mvtc',
          tdClass: 'tiennguyen2507',
        },
        {
          label: 'Vị trí công việc',
          field: 'vtcv',
        },
        {
          label: 'Mô tả chi tiết',
          field: 'mtct',
        },
        {
          label: 'Chức năng',
          field: 'cn',
          html: true,
          tdClass: 'table__chucnang',
          thClass: 'table__chucnang__th',
        },
      ],
      rows: [
        {
          mvtc: '00123', vtcv: 'Giám đốc', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: '<i class="bx bxs-edit"> <i class="bx bx-trash"></i> </i>',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },

      ],
    }
  },
}
</script>
<style>
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
  margin-right: 25px;
}
.table__top__left__select{
  margin-right: 29px;
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
.vgt-table thead{
  background-color: rgba(34, 127, 244, 0.12);

}
.vgt-table thead tr{
  height: 39px;
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
</style>
