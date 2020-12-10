<!--
 * @Author: 吴灏
 * @Date: 2020-12-09 20:38:36
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-10 21:01:08
 * @Description: file content
-->
<template>
  <div class="dropdown" ref="dropdownRef">
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
import { defineComponent, ref, watch } from "vue";
import useClickOutside from "@/hooks/useClickOutside";

export default defineComponent({
  name: "Dropdown",
  props: {
    name: {
      type: String
    }
  },
  setup() {
    const open = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const isOutside = useClickOutside(dropdownRef);

    const handleChangeOpenState = () => {
      open.value = !open.value;
    };

    watch(isOutside, () => {
      if (isOutside.value) open.value = false;
    });

    return {
      open,
      handleChangeOpenState,
      dropdownRef
    };
  }
});
</script>
