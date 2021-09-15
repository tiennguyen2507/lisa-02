<template>
  <div class="listwork">
    <vue-good-table
      class="table"
      :columns="columns"
      :rows="rows"
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

</template>

<script>
import { VueGoodTable } from 'vue-good-table'

export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        {
          id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343,
        },
        {
          id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343,
        },
        {
          id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343,
        },
        {
          id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343,
        },
        {
          id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343,
        },
        {
          id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343,
        },
      ],

    }
  },

}
</script>

<style scoped >
.listwork{
background: white;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
border-radius: 6px;
padding:20px;
}
.table .vgt-table{
    width: 100%;
}

</style>
