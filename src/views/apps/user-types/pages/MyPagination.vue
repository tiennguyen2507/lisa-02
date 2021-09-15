<!-- =========================================================================================
  File Name: 'Pagination.vue'
  Description: 'Component Pagination'
  ----------------------------------------------------------------------------------------
  Author: Nguyen Duy Toan
  Created Date: "2021-01-12"
  Modified Date: "2021-01-12"
========================================================================================== -->
<template>
  <div
    v-if="showPagination"
    class="pagination-container"
  >
    <div class="d-flex justify-content-between flex-wrap">
      <div
        v-if="showPageSelect===true"
        class="d-flex align-items-center mb-0 mt-1"
      >
        <span class="text-nowrap">
          {{ $t('common.pagination.show') }}
        </span>
        <b-form-select
          v-model="pageSize"
          :options="[10,20,50]"
          class="mx-1"
          @input="handlePageSizeChange"
        />
        <span class="text-nowrap">{{ `${$t('common.pagination.of')} ${totalItems} ${$t('common.pagination.item')}` }}</span>
      </div>
      <div class="page-number">
        <b-pagination
          v-model="selectedPage"
          class="mt-1 mb-0"
          :total-rows="totalItems"
          :per-page="pageSize"
          @page-click="handlePageClick"
        >
          <template #first-text>
            <span class="icon">
              <feather-icon
                icon="ChevronsLeftIcon"
                size="16"
              />
            </span>
          </template>
          <template #prev-text>
            <span class="icon">
              <feather-icon
                icon="ChevronLeftIcon"
                size="16"
              />
            </span>
          </template>
          <template #ellipsis-text>
            <span class="icon">
              <feather-icon
                icon="MoreHorizontalIcon"
                size="16"
              />
            </span>
          </template>
          <template #next-text>
            <span class="icon">
              <feather-icon
                icon="ChevronRightIcon"
                size="16"
              />
            </span>
          </template>
          <template #last-text>
            <span class="icon">
              <feather-icon
                icon="ChevronsRightIcon"
                size="16"
              />
            </span>
          </template>
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BPagination, BFormSelect,
} from 'bootstrap-vue'

export default {
  components: {
    'b-pagination': BPagination,
    'b-form-select': BFormSelect,
  },
  props: {
    totalItems: {
      default: 0,
      type: Number,
    },
    defaultPageSize: {
      default: 10,
      type: Number,
    },

    showPageSelect: {
      type: Boolean,
      default: true,
    },
    currentPage: {
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      selectedPage: this.currentPage,
      pageSize: this.defaultPageSize,
    }
  },
  computed: {
    showPagination() {
      return this.totalItems > 0
    },
  },
  watch: {
    currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedPage = newValue
      }
    },
    defaultPageSize(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.pageSize = newValue
      }
    },
  },
  methods: {
    handlePageClick(bvEvent, page) {
      this.$emit('pageClick', page, this.pageSize)
    },
    handlePageSizeChange(pageSize) {
      this.$emit('pageClick', 1, pageSize)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 1rem;
  .page-size {
    margin-left: 1rem;
    margin-right: 2rem;
  }
  .icon {
    width: 8px;
  }
}
</style>
<style lang="scss">
.pagination-container {
  .page-link {
    background-color: #F6FAFF;
  }
  .page-item.disabled{
    .page-link {
      background-color: #F6FAFF;
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .pagination-container {
    .page-number {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
