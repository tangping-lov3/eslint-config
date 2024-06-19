<script setup>
if (1) {
  console.log(1)
}

const a = ref(1)
const b = ref2()
const c = computed(() => a.value + b.value)
const s = getCurrentScope()
// function tranValue(val, to = 0, re = '-') {
//   const val2 = Number(val)
//   if (Number.isNaN(val2)) {
//     return val
//   } else {
//     if (val2 === 0) {
//       return re
//     }

//     return val2.toFixed(to)
//   }
// }
const d = [1]
d.forEach((element) => {
  console.log(element)
})

function test() {
  if (1) {
    console.log(1)
  }
}
</script>

<template>
  <div class="test" affffff bfffff cfffff dfffff ffffe name="11" age="111" test="222" :testI="1" accesskey="a">
    <div aria-activedescendant="">
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  a {
    bottom: 1;
    left: 2;
  }
}
</style>
