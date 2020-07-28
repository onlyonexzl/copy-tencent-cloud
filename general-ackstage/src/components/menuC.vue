<template>
  <div class="menuC"
       :style="{'height': heightInner, 'max-height': heightInner}">
    <!-- 一集菜单 -->
    <div class="one">
      <ul>
        <li v-for="(item_one, index_one) in jsonMenu"
            @mouseover="mouseOver(index_one, 'two', $event)"
            @mouseleave="mouseLeave('two')"
            :key="index_one">
          <span>{{item_one.name_1}}</span>
          <i class="el-icon-arrow-right"></i>
          <div v-if="item_one.children && index_oneChange === index_one"
               ref="menuTwo"
               :style="{'height': heightInner, 'max-height': heightInner, 'left': menuTwoLeft + 'px'}"
               class="two">
            <ul>
              <li v-for="(item_two, index_two) in item_one.children"
                  @mouseover="mouseOver(index_two, 'three', $event)"
                  @mouseleave="mouseLeave('three')"
                  :key="index_two">
                <span>{{item_two.name_2}}</span>
                <i class="el-icon-arrow-right"
                   v-if="item_two.children"></i>
                <div v-if="item_two.children && index_threeChange === index_two"
                     :style="{'height': heightInner, 'max-height': heightInner, 'left': menuThreeLeft + 'px'}"
                     class="three">
                  <ul>
                    <li v-for="(item_three, index_three) in item_two.children"
                        @mouseover="mouseOver(index_three, 'line', $event)"
                        @mouseleave="mouseLeave('line')"
                        :key="index_three">
                      <span>{{item_three.name_3}}</span>
                      <!-- <i class="el-icon-arrow-right"></i> -->
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'menuC',

  data () {
    return {
      heightInner: 'auto',
      index_oneChange: null,
      menuTwoLeft: 0,
      index_threeChange: null,
      menuThreeLeft: 1,
      jsonMenu: [{
        name_1: '测试',
        children: [{
          name_2: '二级a',
          children: [{
            name_3: '三级a'
          }, {
            name_3: '三级a'
          }, {
            name_3: '三级a'
          }]
        }, {
          name_2: '二级a'
        }, {
          name_2: '二级a'
        }, {
          name_2: '二级a',
          children: [{
            name_3: '三级a'
          }, {
            name_3: '三级a'
          }, {
            name_3: '三级a'
          }, {
            name_3: '三级a'
          }]
        }]
      }, {
        name_1: '测试uq',
        children: [{
          name_2: '二级b',
          children: [{
            name_3: '三级b'
          }, {
            name_3: '三级b'
          }, {
            name_3: '三级b'
          }, {
            name_3: '三级b'
          }]
        }, {
          name_2: '二级b'
        }, {
          name_2: '二级b'
        }, {
          name_2: '二级b'
        }, {
          name_2: '二级b',
          children: [{
            name_3: '三级b'
          }, {
            name_3: '三级b'
          }, {
            name_3: '三级b'
          }]
        }, {
          name_2: '二级b'
        }]
      }, {
        name_1: '测试q',
        children: [{
          name_2: '二级c'
        }, {
          name_2: '二级c',
          children: [{
            name_3: '三级c'
          }]
        }, {
          name_2: '二级c'
        }, {
          name_2: '二级c'
        }]
      }],
      stope: null,
      stopeOne: null,
    }
  },

  methods: {
    mouseOver (index, type, event) {
      if (this.stope) window.clearInterval(this.stope)
      if (event) event.stopPropagation();
      // if (this.stopeOne) window.clearInterval(this.stopeOne)
      this.stope = null
      if (type === 'two') {
        if (this.menuTwoLeft === 200) return false
        this.index_oneChange = index
        this.menuTwoLeft = 0
        this.index_threeChange = null
        this.menuThreeLeft = 0
        let stope = null
        if (stope) window.clearInterval(stope)
        stope = setInterval(() => {
          if (this.menuTwoLeft === 200) {
            window.clearInterval(stope)
            return false
          }
          this.menuTwoLeft += 10
        }, 5);
      } else if (type === 'three') {
        let time = null
        if (this.menuThreeLeft === 200) return false
        this.index_threeChange = index
        this.menuThreeLeft = 0
        time = setInterval(() => {
          if (this.menuThreeLeft === 200) {
            window.clearInterval(time)
            return false
          }
          this.menuThreeLeft += 10
        }, 5);
      } else {

      }

    },
    mouseLeave (type) {
      if (type === 'two') {
        this.index_oneChange = null
        this.menuTwoLeft = 0
      } else if (type === 'three') {
        this.index_threeChange = null
        this.menuThreeLeft = 0
      }
    }
  },

  mounted () {
    this.heightInner = window.innerHeight - 40 + 'px'
  }
}
</script>

<style lang="scss" scoped>
.menuC {
  // display: none;
  width: 200px;
  padding: 40px 0;
  background: #fff;
  position: absolute;
  top: 40px;
  box-sizing: border-box;
  // left: -200px;
  z-index: 999;
  .one {
    width: 100%;
    background: #fff;
    height: 100%;
    border-right: solid 1px #ccc;
    // height: 100%;
    > ul {
      width: 100%;
      height: 100%;
      > li {
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        line-height: 40px;
        font-size: 15px;
        cursor: pointer;

        > span {
          color: #000;
        }

        > i {
          color: #ccc;
          line-height: 40px;
        }
      }
      > li:hover {
        background: #00a4ff;
        > span {
          color: #fff;
        }

        > i {
          color: #fff;
        }

        .two {
          // width: 300px;
          // transform: translate(200px, 0px) !important;
        }
      }
    }
  }

  .two {
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: -2;
    // transition: all 0.3s linear;
    position: absolute;
    top: 0px;
    left: 0px;
    // z-index: -1;
    background: #fff;
    box-sizing: border-box;
    padding: 40px 0;
    border-right: solid 1px #ccc;
    box-sizing: border-box;
    // height: 100%;
    > ul {
      width: 100%;
      > li {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        line-height: 40px;
        font-size: 15px;
        cursor: pointer;

        > span {
          color: #000;
        }

        > i {
          color: #ccc;
          line-height: 40px;
        }
      }
      > li:hover {
        background: #00a4ff;
        > span {
          color: #fff;
        }

        > i {
          color: #fff;
        }
      }
    }
  }

  .three {
    width: 100%;
    position: absolute;
    top: 0px;
    border-right: solid 1px #ccc;
    background: #fff;
    box-sizing: border-box;
    padding: 40px 0;
    z-index: -1;
    // z-index: -99;
    // height: 100%;
    > ul {
      width: 100%;
      > li {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        line-height: 40px;
        font-size: 15px;
        cursor: pointer;

        > span {
          color: #000;
        }

        > i {
          color: #ccc;
          line-height: 40px;
        }
      }
      > li:hover {
        background: #00a4ff;
        > span {
          color: #fff;
        }

        > i {
          color: #fff;
        }
      }
    }
  }
}
</style>