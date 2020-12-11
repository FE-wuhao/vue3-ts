<!--
 * @Author: 吴灏
 * @Date: 2020-12-11 13:47:20
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-11 16:36:42
 * @Description: file content
-->
<template>
  <div>label</div>
  <input v-model="validateValues.inputValue" @blur="handleValidate">
  <div v-if="!validateValues.isValidateOk">{{validateValues.message}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType,reactive,toRef } from "vue";
import useFormValidate,{IRule} from 'hooks/useFormValidate'

export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: {
      type: Array as PropType<IRule[]>,
      required: true
    }
  },
  setup(props){
    const validateValues=reactive({
      inputValue:'',
      isValidateOk:false, 
      message: ''
    });
  
    const handleValidate=()=>{
     const {pass,msg}=useFormValidate(validateValues.inputValue,props.rules);

     validateValues.isValidateOk=pass;
     validateValues.message=msg;
    }

    return {
      handleValidate,
      validateValues
    };
  }
});
</script>