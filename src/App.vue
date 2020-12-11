<!--
 * @Author: 吴灏
 * @Date: 2020-12-08 21:14:02
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-11 16:41:34
 * @Description: file content
-->
<template>
  <div class="container">
    <!-- <GlobalHeader :user="userInfo" /> -->
    <ValidateInput :rules="rules" />
    <!-- <ColumnList :list="testData" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, {
  ColumnListProps
} from "components/ColumnList/ColumnList.vue";
import GlobalHeader, {
  GlobalHeaderProps
} from "./components/GlobalHeader/GlobalHeader.vue";
import ValidateInput from 'components/ValidateInput/ValidateInput.vue';
import {IRule} from 'hooks/useFormValidate';

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const testData: ColumnListProps[] = [
      {
        id: 1,
        title: "test1的专栏",
        description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧"
      },
      {
        id: 2,
        title: "test2的专栏",
        description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
      },
      {
        id: 3,
        title: "test2的专栏",
        description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
      },
      {
        id: 4,
        title: "test2的专栏",
        description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
      }
    ];

    const userInfo: GlobalHeaderProps = {
      id: 0,
      name: "吴灏",
      isLogin: true
    };

    const rules:IRule[]=[
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]

    return {
      testData,
      userInfo,
      rules
    };
  }
});
</script>
