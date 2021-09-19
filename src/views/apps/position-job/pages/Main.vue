<template>
  <div>
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
              <b-breadcrumb-item active>
                Vị trí công việc
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </div>
      </div>
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
                v-for="(value,index) in selectDown"
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
                for="file"
                type="file"
                variant="lisa-blue"
                class="btn-icon table__top__left__button__item"
              >
                <input
                  id="file"
                  ref="file"
                  type="file"
                  class="inputFlie"
                  @change="fileFC()"
                >
                <label for="file"><feather-icon
                  icon="Link2Icon"
                  for="file"
                /></label>

              </b-button>
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                for="file"
                variant="outline-primary"
                class="btn-icon table__top__left__button__item"
                disabled
              >
                <feather-icon
                  for="file"
                  icon="DownloadIcon"
                  @click="dowloadFile"
                />

              </b-button>

            </div>
          </div>
          <div class="table__top__right">
            <div class="table__top__right__seach">
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SearchIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="valueInput"
                  placeholder="Tìm kiếm"
                />
              </b-input-group>
            </div>
            <div class="table__top__right__button">
              <router-link
                to="position-job/add"
              >
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="lisa-blue"
                  class="table__top__right__button"
                >
                  <feather-icon icon="PlusIcon" /> Thêm vị trí công việc
                </b-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="table__main">
          <div>
            <vue-good-table
              :columns="columns"
              :rows="dataPositionJob"
              :select-options="{ enabled: true , selectOnCheckboxOnly: true,}"
              style-class="vgt-table"
              :pagination-options="{
                enabled: true,
                setCurrentPage: currentPage,
                perPage: perpage,
              }"
              :search-options="{
                enabled: true,
                externalQuery: valueInput
              }"
              :sort-options="{
                enabled: true,
                initialSortBy: {field: 'code', type: 'asc'},
                initialSortBy: {field: 'name', type: 'asc'}
              }"
              @on-selected-rows-change="selectionChanged"
              @on-search="valueInput"
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
                    @click="deleteWork(props.row.id)"
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
                :total-rows="dataPositionJob.length"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></template>

<script>
import {
  BBreadcrumb, BBreadcrumbItem,
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BButton,
  BDropdown, BDropdownItem, BDropdownDivider,
} from 'bootstrap-vue'
import { mapActions, mapState } from 'vuex'
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
    BBreadcrumb,
    BBreadcrumbItem,
  },

  data() {
    return {
      file: '',
      selectData: [],
      valueInput: '',
      firstpage: -5,
      lastpage: 0,
      perpage: 5, // số trang hiển thị trên 1 bảng
      selectDown: [5, 10, 20], // dể ghi
      currentPage: 1, // trang hiện tại
      columns: [
        {
          label: 'Mã vị trí công việc',
          field: 'code',
          tdClass: 'tiennguyen2507',
        },
        {
          label: 'Vị trí công việc',
          field: 'name',
        },
        {
          label: 'Mô tả chi tiết',
          field: 'description',
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
          mvtc: '00123', vtcv: 'Giám đốc', mtct: 'Mô tả chi tiết',
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
  computed: {
    ...mapState('positionJob', ['dataPositionJob']),
  },
  async created() {
    await this.doFetchDataPositionJob()
  },
  methods: {
    ...mapActions('positionJob', ['doFetchDataPositionJob', 'downloadSamplePositionJob']),
    selectionChanged(param) {
      console.log(param.selectedRows)
      this.selectData = param.selectedRows.map(value => value.id)
      console.log(this.selectData)
    },
    dowloadFile() {
      this.downloadSamplePositionJob()
    },
    fileFC() {
      // eslint-disable-next-line prefer-destructuring
      this.file = this.$refs.file.files[0]
      const fileReader = new FileReader()
      fileReader.readAsBinaryString(this.file)
      fileReader.onload = event => {
        const dataExcel = event.target.result
        // eslint-disable-next-line no-undef
        const workbook = XLSX.read(dataExcel, { type: 'binary' })
        // eslint-disable-next-line camelcase
        const first_sheet_name = workbook.SheetNames[0]
        /* Get worksheet */
        const worksheet = workbook.Sheets[first_sheet_name]
        // eslint-disable-next-line no-undef
        const data = XLSX.utils.sheet_to_json(worksheet, {
          raw: true,
        })
        console.log(data)
        // workbook.SheetNames.forEach(sheet => {
        //   // eslint-disable-next-line no-undef
        //   const rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
        //   console.log(rowObject)
        // })
      }
    },

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
  padding:10px 0px 77px 0px;
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
   background-color: #d0ddee

}
.table__bottom{
  padding-left: 25px;
  padding-bottom: 17px;
  padding-right: 20px;
  padding-top:77px;

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
    background-color: #E4F0FE;
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
.inputFlie{
  display: none;
}
label{
  margin: 0px;
  color: white;
}
</style>
