<!--
 * @Author: 吴灏
 * @Date: 2020-12-09 21:04:01
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-10 17:41:48
 * @Description: file content
-->
<template>
  <li class="dropdown-option">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropdownItem"
});
</script>
