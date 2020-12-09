<!--
 * @Author: 吴灏
 * @Date: 2020-12-09 20:08:28
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-09 22:32:54
 * @Description: file content
-->
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item btn btn-outline-light my-2">登陆</li>
      <li class="list-inline-item btn btn-outline-light my-2">注册</li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <Dropdown :name="`欢迎你 ${user.name}`">
        <DropdownItem>1</DropdownItem>
        <DropdownItem>2</DropdownItem>
        <DropdownItem>3</DropdownItem>
      </Dropdown>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";

export interface GlobalHeaderProps {
  isLogin: boolean;
  id?: number;
  name?: string;
}

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<GlobalHeaderProps>,
      required: true
    }
  }
});
</script>
