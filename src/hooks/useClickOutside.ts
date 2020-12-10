/*
 * @Author: 吴灏
 * @Date: 2020-12-10 17:42:40
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-10 19:58:06
 * @Description: file content
 */
import { ref, onMounted, onUnmounted, Ref } from 'vue';

const useClickOutside = (elementRef: Ref<HTMLElement | null>) => {
  const isOutside = ref(true);

  const handleClick = (e: MouseEvent) => {
    if (elementRef?.value?.contains(e.target as HTMLElement)) {
      isOutside.value = false;
    } else {
      isOutside.value = true;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClick);
  });

  return isOutside;
};

export default useClickOutside;
