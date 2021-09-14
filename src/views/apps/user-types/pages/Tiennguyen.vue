<template>

  <div class="table01">
    <div class="tiennguyen">
      <div class="tiennguyen__left">
        <p>hiển thị</p>
        <!-- danger -->
        <b-dropdown
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          :text="page==''? '5':page"
          class="tiennguyen__left__select"

          variant="flat-dark"
        >
          <b-dropdown-item
            v-for="(value,index) in select__down"
            :key="index"
            @click="page=value"
          >
            {{ value }}
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>
            {{ page==''? '5':page }}
          </b-dropdown-item>
        </b-dropdown>

        <div class="tiennguyen__left__button">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="danger"
            class="btn-icon tiennguyen__left__button__item "
          >
            <feather-icon icon="Link2Icon" />
          </b-button>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="btn-icon tiennguyen__left__button__item"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            class="btn-icon tiennguyen__left__button__item"
            disabled
          >
            <feather-icon icon="DownloadIcon" />
          </b-button>
        </div>
      </div>
      <div class="tiennguyen__right">
        <div class="tiennguyen__right__seach">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="SearchIcon" />
            </b-input-group-prepend>
            <b-form-input placeholder="Search" />
          </b-input-group>
        </div>
        <div class="tiennguyen__right__button">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="tiennguyen__right__button"
          >
            + Thêm vị trí công việc
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
            mode: 'page',
            setCurrentPage: currentPage,
            perPage: page,
            nextLabel: '>',
            prevLabel: '<',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page', // for 'pages' mode
            allLabel: 'All',
          }"
          @on-selected-rows-change="selectionChanged"
        >
          />
        </vue-good-table></div>
    </div>
    <div class="table__bottom">
      <div class="table__bottom__left">
        <p>Hiển thị 1 đến 7 của 100 danh mục</p>
      </div>
      <div class="table__bottom__right">
        <div class="mt-2">
          <b-pagination
            v-model="currentPage"
            :per-page="perPage"
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
      page: '',
      select__down: [5, 10, 20],
      perPage: 3,
      currentPage: 1,
      row: 10,
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
          mvtc: '00123', vtcv: 'Giám đốc', mtct: 'Mô tả chi tiết', cn: 'không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
        },
        {
          mvtc: '00123', vtcv: 'Trưởng phòng', mtct: 'Mô tả chi tiết', cn: ' không hiên thị icon',
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
.tiennguyen{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.tiennguyen__left{
  display: flex;
  align-items: center;
}
.tiennguyen__left p{
  margin-bottom:0px;
  margin-right: 25px;
}
.tiennguyen__left__select{
  margin-right: 29px;
}
.tiennguyen__right {
  display: flex;
  align-items: center;
}
.tiennguyen__right__button{
  margin-left: 10px;
}

.tiennguyen__left__button__item{
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
  padding-right: 50px;
}
.table__chucnang__th{
  text-align: end;
  padding-right: 80px;
}
.footer__row-count{
  display: none;
}
.footer__navigation{
  display: none;
}
</style>
