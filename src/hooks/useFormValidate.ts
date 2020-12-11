/*
 * @Author: 吴灏
 * @Date: 2020-12-11 14:05:23
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-11 16:39:22
 * @Description: file content
 */
import { Ref } from 'vue';

export type TRule = 'required' | 'email';

export interface IRule {
  type: TRule;
  message: string;
}

const useFormValidate = (inputValue: string, rules: IRule[]) => {
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let pass = false;
  let msg = '';

  pass = rules.every((rule) => {
    switch (rule.type) {
      case 'required':
        if (inputValue === '') {
          msg = rule.message;
          return false;
        }
        return true;
      case 'email':
        if (!emailReg.test(inputValue)) {
          msg = rule.message;
          return false;
        }
        return true;
      default:
        return true;
    }
  });

  return { pass, msg };
};

export default useFormValidate;
