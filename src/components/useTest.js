import { ref, computed, onMounted, onUnmounted, readonly } from "vue";

export default function useCountDown(countDownDuration = 10) {
    const countDown = ref(countDownDuration);
    const interval = ref(null);
    const decrement = () => {
        if (countDown.value > 0) countDown.value -= 1;
    };
    const isDone = computed(() => {
        return countDown.value <= 0;
    });
    onMounted(() => {
        interval.value = setInterval(decrement, 1000);
    });
    onUnmounted(() => {
        clearInterval(interval.value);
    });

    return { countDown:readonly(countDown), isDone };
}
