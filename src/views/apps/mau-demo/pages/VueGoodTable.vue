<template>
  <vue-good-table
    ref="data-table"
    mode="remote"
    :rows="rows"
    :columns="tableColums"
    :style-class="styleClass"
    :sort-options="sortOptions"
    :max-height="`${maxHeight}px`"
    :group-options="groupOptions"
    @on-sort-change="$emit('onSortChange', $event)"
  >
    <template slot="emptystate">
      <div class="empty-table d-block">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <b-img
            class="img-empty-table"
            fluid
            :src="emptyImg"
            alt="empty table"
          />
        </div>
        <div class="w-100 d-flex align-items-center justify-content-center mt-2">
          <span class="text-primary">{{ $t("common.empty-table") }}</span>
        </div>
      </div>
    </template>
    <!-- Template table column -->
    <template
      slot="table-column"
      slot-scope="props"
    >
      <span
        v-if="
          props.column.label === 'checkbox' &&
            selectOptions.selectOnlyOne &&
            selectOptions.selectOnlyOne === true
        "
      />
      <b-form-checkbox
        v-else-if="props.column.label === 'checkbox'"
        :indeterminate="indeterminate"
        :checked="selectedAll"
        @change="checkedAll"
      />
      <slot
        v-else
        name="table-column"
        :row="props.row"
        :column="props.column"
        :index="props.index"
      />
    </template>
    <!-- Template table row -->
    <template
      slot="table-row"
      slot-scope="props"
    >
      <b-form-checkbox
        v-if="props.column.field === 'checkbox'"
        :checked="props.row.isSelected"
        :disabled="props.row.isDisabled && props.row.isDisabled == true"
        @change="selectedChange($event, props.row)"
      />
      <slot
        v-else
        name="table-row"
        :row="props.row"
        :column="props.column"
        :index="props.index"
      />
    </template>
    <template
      slot="table-header-row"
      slot-scope="props"
    >
      <b-form-checkbox
        v-if="
          groupOptions.allowEmptySelect &&
            groupOptions.allowEmptySelect === true &&
            props.column &&
            props.column.field === 'checkbox'
        "
        :checked="props.row.isSelected"
        @change="selectedChange($event, props.row)"
      />
      <slot
        v-else
        name="table-header-row"
        :row="props.row"
        :column="props.column"
        :index="props.index"
      />
    </template>
  </vue-good-table>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import { BFormCheckbox, BImg } from 'bootstrap-vue'

export default {
  components: {
    VueGoodTable,
    BFormCheckbox,
    BImg,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    styleClass: {
      type: String,
      default: 'vgt-table',
    },

    groupOptions: {
      type: Object,
      default: () => ({}),
    },
    selectOptions: {
      type: Object,
      default: () => ({
        enabled: true,
        selectOnlyOne: false,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }),
    },
    sortOptions: {
      type: Object,
      default: () => ({
        enabled: true,
      }),
    },
    maxHeight: {
      type: Number,
      default: null,
    },
    fixedHeader: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      tableColums: [],
      // eslint-disable-next-line global-require
      emptyImg: require('@/assets/images/svg/empty-table.svg'),
      // indeterminate: false,
      // selectedRows: [],
    }
  },
  computed: {
    indeterminate() {
      if (this.groupOptions.enabled === true) {
        let count = 0
        this.rows.forEach(element => {
          count += element.children.length
        })
        return (
          this.selectedRows
          && this.selectedRows.length > 0
          && this.selectedRows.length < count
        )
      }
      return (
        this.selectedRows
        && this.selectedRows.length > 0
        && this.selectedRows.length < this.rows.length
      )
    },
    selectedAll() {
      if (this.groupOptions.enabled === true) {
        let count = 0
        this.rows.forEach(element => {
          count += element.children.length
        })
        return (
          this.selectedRows
          && this.selectedRows.length === count
          && this.selectedRows.length > 0
        )
      }
      return (
        this.selectedRows
        && this.selectedRows.length === this.rows.length
        && this.selectedRows.length > 0
      )
    },
    selectedRows() {
      const selectedRows = []
      if (this.rows) {
        if (this.groupOptions.enabled === true) {
          this.rows.forEach(element => {
            element.children.forEach(child => {
              if (child.isSelected === true) {
                selectedRows.push(child)
              }
            })
            if (
              this.groupOptions.allowEmptySelect
              && this.groupOptions.allowEmptySelect === true
            ) {
              if (
                element.children.length === 0
                && element.isSelected === true
              ) {
                selectedRows.push(element)
              }
            }
          })
        } else {
          this.rows.forEach(element => {
            if (element.isSelected === true) {
              selectedRows.push(element)
            }
          })
        }
      }
      return selectedRows
    },
  },
  watch: {
    selectedRows() {
      this.$emit('on-selected-rows-change', {
        selectedRows: this.selectedRows,
      })
    },
  },

  created() {
    this.tableColums = [...this.columns]
    if (this.selectOptions.enabled === true) {
      this.tableColums.unshift({
        label: 'checkbox',
        field: 'checkbox',
        sortable: false,
        width: '50px',
        tdClass:
          this.selectOptions.vertialAlignTop
          && this.selectOptions.vertialAlignTop === true
            ? 'vertical-top'
            : '',
      })
    }
    const column = this.tableColums.find(
      x => x.label.toLowerCase() === 'action',
    )
    if (column) {
      column.sortable = false
      column.width = '50px'
      column.tdClass = 'btn-pd0'
    }
  },
  mounted() {
    const vgtResponsive = this.$refs['data-table'].$el.getElementsByClassName(
      'vgt-responsive',
    )
    if (vgtResponsive.length > 0) {
      vgtResponsive.forEach(element => {
        if (element.classList.contains('position-static') !== true) { element.classList.add('position-static') }
      })
    }
    if (this.groupOptions.enabled === true) {
      const groupTh = this.$refs['data-table'].$el.getElementsByClassName(
        'vgt-row-header',
      )
      if (groupTh.length > 0) {
        groupTh.forEach(element => {
          const content = element.getElementsByClassName('td-header-group')
          if (content.length > 0) { if (element.classList.contains('position-static') !== true) { element.classList.add('position-static') } }
          const tbody = element.closest('tbody')
          if (tbody.classList.contains('body-group-content') !== true) { tbody.classList.add('body-group-content') }
        })
      }
    }
  },
  updated() {
    const vgtResponsive = this.$refs['data-table'].$el.getElementsByClassName(
      'vgt-responsive',
    )
    if (vgtResponsive.length > 0) {
      vgtResponsive.forEach(element => {
        if (element.classList.contains('position-static') !== true) { element.classList.add('position-static') }
      })
    }

    if (this.groupOptions.enabled === true) {
      const groupTh = this.$refs['data-table'].$el.getElementsByClassName(
        'vgt-row-header',
      )

      if (groupTh.length > 0) {
        groupTh.forEach(element => {
          const content = element.getElementsByClassName('td-header-group')
          if (content.length > 0) {
            if (element.classList.contains('position-static') !== true) { element.classList.add('position-static') }
            const tbody = element.closest('tbody')
            if (tbody.classList.contains('body-group-content') !== true) { tbody.classList.add('body-group-content') }
          } else {
            const tbody = element.closest('tbody')
            if (tbody && tbody.classList.contains('body-group-content') !== true) tbody.classList.remove('body-group-content')
          }
        })
      }
    }
  },
  methods: {
    // thay đổi lựa chọn
    selectedChange(value, data) {
      if (this.groupOptions.enabled === true) {
        this.rows.forEach(element => {
          element.children.forEach(child => {
            if (child.id === data.id) {
              this.$set(child, 'isSelected', value)
            }
          })
          if (
            this.groupOptions.allowEmptySelect
            && this.groupOptions.allowEmptySelect === true
          ) {
            if (element.children.length === 0 && element.id === data.id) {
              this.$set(element, 'isSelected', value)
            }
          }
        })
      } else if (
        this.selectOptions.selectOnlyOne
        && this.selectOptions.selectOnlyOne === true
      ) {
        if (value === true) {
          this.unselectedAll(data.originalIndex)
        }
        this.$set(this.rows[data.originalIndex], 'isSelected', value)
      } else this.$set(this.rows[data.originalIndex], 'isSelected', value)
    },
    unselectedAll(index) {
      for (let i = 0; i < this.rows.length; i++) {
        if (i !== index) this.$set(this.rows[i], 'isSelected', false)
      }
    },
    // lựa chọn tất cả
    checkedAll(value) {
      if (this.groupOptions.enabled === true) {
        this.rows.forEach(element => {
          element.children.forEach(child => {
            this.$set(child, 'isSelected', value)
          })
          if (
            this.groupOptions.allowEmptySelect
            && this.groupOptions.allowEmptySelect === true
          ) {
            if (element.children.length === 0) {
              this.$set(element, 'isSelected', value)
            }
          }
        })
      } else {
        this.rows.forEach(element => {
          if (!(element.isDisabled && element.isDisabled === true)) {
            this.$set(element, 'isSelected', value)
          }
        })
      }
    },
    // expanded all group table
    expandAll() {
      this.$refs['data-table'].expandAll()
    },
    // collapse all group table
    collapseAll() {
      this.$refs['data-table'].collapseAll()
    },
  },
}
</script>
<style lang="css" scoped>
.empty-table {
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>
<style lang="scss">
@import "@core/scss/vue/libs/vue-good-table.scss";

// .vgt-table {
//   .vertical-top {
//     //vertical-align: top !important;
//     .custom-checkbox{
//       //margin-top: 11px;
//     }
//   }
// }

.btn-pd0 {
  button {
    padding: 0px;
  }
}
</style>
<style scoped>
.img-empty-table{
  height: 100px;
}
</style>
