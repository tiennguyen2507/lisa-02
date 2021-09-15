<template>
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
  </div>

</template>

<script>import {
  BFormInput, BRow, BCol, BFormGroup, BFormTextarea, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BFormTextarea,
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

</style>
