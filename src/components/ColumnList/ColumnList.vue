<!--
 * @Author: 吴灏
 * @Date: 2020-12-08 21:08:39
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-08 22:15:08
 * @Description: file content
-->
<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle  border border-light w-25 h-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a class="btn btn-outline-primary" href="#">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface ColumnListProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnListProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = props.list.map(column => {
      if (!column.avatar)
        return {
          ...column,
          avatar: require("@/assets/avatar.jpg")
        };
      return column;
    });

    return {
      columnList
    };
  }
});
</script>
