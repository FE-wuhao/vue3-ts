<!--
 * @Author: 吴灏
 * @Date: 2020-12-09 20:38:36
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-09 22:31:34
 * @Description: file content
-->
<template>
  <div class="dropdown">
    <a
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="handleChangeOpenState"
    >
      {{ name }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="open">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dropdown",
  props: {
    name: {
      type: String
    }
  },
  setup() {
    const open = ref(false);

    const handleChangeOpenState = () => {
      open.value = !open.value;
    };

    return {
      open,
      handleChangeOpenState
    };
  }
});
</script>
