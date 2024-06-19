<script setup>
if (1) {
  console.log(1)
}

// const a = ref(1)
// const b = ref2()
// const c = computed(() => a.value + b.value)
// const s = getCurrentScope()
// // function tranValue(val, to = 0, re = '-') {
// //   const val2 = Number(val)
// //   if (Number.isNaN(val2)) {
// //     return val
// //   } else {
// //     if (val2 === 0) {
// //       return re
// //     }

// //     return val2.toFixed(to)
// //   }
// // }
// const d = [1]
// d.forEach((element) => {
//   console.log(element)
// })

// function test() {
//   if (1) {
//     console.log(1)
//   }
// }

function addText([x, y], name, onClick) {
  if (window.__long_map) {
    const layer = new window.LongMap.Layer()
    window.__long_map.addLayer(layer)

    // 创建文字对象
    const text = new window.LongMap.Text({
      text: name,
      position: new window.LongMap.Point3(x, y, 0),
      color: new window.LongMap.Color('#27AEC3'),
      scale: 2.5,
      offset: { x: -220, y: -50 }
    })

    if (onClick) {
      window.__long_map.addEventListener('click', (e) => {
        for (const f of e.features) {
          if (f === text) {
            onClick &&
              onClick(e, {
                name,
                text
              })
          }
        }
      })
    }

    layer.addFeature(text)
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
    background: linear-gradient(138deg, rgba(0, 213, 255, 0.5), rgba(4, 52, 112, 0) 100%);
    border-radius: 4px;
  }
}
</style>
