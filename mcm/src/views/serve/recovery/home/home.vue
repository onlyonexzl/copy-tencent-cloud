<template>
  <div class="mian">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="回收"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/serve/house/locals.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 地址 -->
    <div class="adress">
      <van-cell is-link
                @click="setAdree">
        <template #title>
          <div class="item">
            <div class="location">
              <img src="@/assets/images/icon/serve/recovery/local.png"
                   style="width:.27rem;margin-right:.05rem"
                   alt />
              <span class="adress-text">新竹城2期男组团7#1208</span>
            </div>
            <div class="phone">
              <span>中年少女15150124062</span>
            </div>
          </div>
        </template>
      </van-cell>
    </div>

    <!-- 添加武平 -->
    <div class="add-serve">
      <span class="tips"
            v-if="checkedArray.length == 0">请添加您需要上门回收的物品吧</span>
      <div class="checked"
           v-else>{{checkedArray}}</div>
      <div class="btn"
           @click="add">
        <van-icon name="plus" />
        <span>立即添加</span>
      </div>
    </div>
    <popup :show="show"
           :data="cateDataArr"
           @closePopup="closePopup"
           @checkedArray="checkedArray"></popup>
    <!-- form -->
    <div class="form-list">
      <ul>
        <li>
          <van-cell is-link
                    :value="timeText?timeText:'请选择预约上门时间'"
                    @click="timeShow = true">
            <template #title>
              <div class="item">
                <span class="custom-title">预约时间</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    value="描述物品状态、特殊物品">
            <template #title>
              <div class="item">
                <span class="custom-title">留言备注</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell>
            <template #title>
              <div class="item">
                <span class="custom-title">上传图片</span>
                <span class="tips">将要回收的物品拍照一起上传</span>
              </div>
            </template>
          </van-cell>
          <!-- 照片墙 -->
          <div class="photos">
            <div class="warp">
              <van-uploader v-model="fileList"
                            max-count="9"
                            :after-read="afterRead"
                            multiple />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="foot">
      <van-cell value="￥3">
        <template #title>
          <div class="item">
            <span class="custom-title">预约时间</span>
            <span class="tips">限时减免</span>
          </div>
        </template>
      </van-cell>
      <div class="footer">
        <span class="agreement">确认提交预约等于同意了《美城上门回收免费条款》</span>
        <div class="submit">
          <span @click="() => {$router.push('/serve/recycling/list')}"
                style="background: #fff; border: solid 1px #C3AB87; color: #C3AB87">回收清单</span>
          <span @click="addOrder">立即预约</span>
        </div>
      </div>
    </div>
    <van-popup v-model="timeShow"
               position="bottom">

      <van-datetime-picker v-model="currentDate"
                           title="请预约上门日期"
                           type="date"
                           confirm-button-text="下一步"
                           :columns="columns"
                           @confirm="checkedTime"
                           v-if="flagName === '下一步'"
                           @cancel="cancel"
                           :min-date="minDate"
                           ref="datePicker"
                           :columns-order="['month', 'day', 'year']"
                           :formatter="formatter" />

      <div class="none">
        <van-datetime-picker v-model="currentDate"
                             show-toolbar
                             title="请预约上门时间"
                             v-if="flagName === '完成'"
                             confirm-button-text="完成"
                             type="datehour"
                             @confirm="checkedTime"
                             :min-date="minDate"
                             :formatter="formatter"
                             ref="datePicker" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import popup from "./components/popup";
import uploaderMixin from '@/mixins/uploader'
import { Dialog } from 'vant';

export default {
  components: { popup },
  mixins: [uploaderMixin],
  data () {
    return {
      show: false,  //弹窗显示
      cateDataArr: [],  //分类列表
      stroageData: [],  //  
      checkedArray: [], //选中数据
      timeShow: false,  // 时间选择弹窗
      columns: [  //时间数据
        {
          values: ["今天", "明天", "后天"],
          defaultIndex: 1,
        },
        {
          values: [
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
          ],
          defaultIndex: 1,
        },
      ],
      flagName: '下一步',
      timeText: "", // 时间字符串
      minDate: new Date(),  //最小时间
      currentDate: new Date(),  //当前时间
    };
  },
  created () {
    this.getCateData();  // 获取分类数据
  },
  methods: {
    getCateData () {
      let defaultLevel = 1; // 默认等级为1
      let defaultParentId = 0;  // 默认父级id
      this.trackBack(defaultLevel, defaultParentId, this.stroageData, [[]]); // 递归获取所有分类数据
      setTimeout(() => {  // 定事情
        // 默认pid 和 所有的数据
        // 递归重排数组
        this.cateDataArr = this.reMakeCateDataArr(
          defaultParentId,
          this.stroageData
        );
        console.log(this.cateDataArr);
      }, 500);
    },

    // 递归将所有选项获取出来
    trackBack (level, pid, resData, data) {
      if (!data.length) {
        return data;
      }
      this.$api.serve.recovery
        .getRecyclerCate({
          level: level,
          parent_id: pid,
        })
        .then((res) => {
          for (let item of res) {
            this.stroageData.push(item);
            this.trackBack(item.level + 1, item.id, resData, res);
          }
        });
    },

    // 递归将所有数据重新排序
    reMakeCateDataArr (pid, allData) {
      let res = [];
      for (let i in allData) {
        if (allData[i].pid == pid) {
          allData[i].children = [];
          // 不写退出条件 因为最后一个的id 不是任何一个的pid
          allData[i].children.push(
            this.reMakeCateDataArr(allData[i].id, allData)
          );
          res.push(allData[i]);
        }
      }
      return res;
    },

    // 提交预约订单
    addOrder () {

      if (!this.judgeData(this.checkedArray.length, '请选择回收类别')) return;
      if (!this.judgeData(this.timeText.length, '请选择预约时间')) return;
      if (!this.judgeData(this.fileList.length, '请选择图片')) return;

      let imgs = "";
      this.fileList.forEach(item => {
        console.log(item);
        imgs += item.url + ","
      })
      imgs = imgs.substr(0, imgs.length - 1)

      Dialog.confirm({
        title: '确认提交回收预约订单？',
        message: '会收员抢单后将在约定时间上门取件，请提前打包回收商品。',
      })
        .then(() => {
          this.$api.serve.recovery.addRecoveryOrder({
            cate_id: 1,
            address_id: localStorage.getItem("_M_City_Id"),
            remark: '测试',
            img: imgs,
            subscribe_time: this.timeText,
            uid: this.$store.state.user.user_id
          })
            .then(res => {
              this.$toast.success("预约成功");
              setTimeout(() => {
                this.$router.go(-1)
              }, 1000)
            })
        })
        .catch((res) => {
          console.log(res)
        });
    },
    // 判断数据
    judgeData (condition, message) {
      if (!condition) {
        this.$toast.fail(message)
        return false;
      }
      return true
    },
    // 关闭弹窗
    closePopup (obj) {
      this.show = obj.bol;
      this.checkedArray = obj.checkedData;
    },
    // 时间选择
    checkedTime () {

      if (this.flagName === '下一步') {
        let time = this.$refs.datePicker.getPicker().getValues().join("");
        this.timeText = time.replace("年", "-").replace("月", "-").replace("日", " ");
        this.flagName = '完成'
        console.log(this.timeText)
        // .replace("时", ":").replace("分", ":00")
      } else {
        let time = this.$refs.datePicker.getPicker().getValues().join("");
        this.timeText += time.replace("时", ":").replace("分", ":00").split('日')[1];
        this.timeShow = false;
        // console.log(time.replace("时", ":").replace("分", ":00"))

        this.flagName = '下一步'
      }

    },

    cancel () {
      this.timeText = ''
      this.timeShow = false;
    },
    // 随机名
    genID (length) {
      return parseInt(Math.random() * 1000000)
    },
    // 过滤时间
    formatter (type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      } else if (type === "hour") {
        return `${val}时`;
      } else if (type === "minute") {
        return `${val}分`;
      }
      return val;
    },
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    setAdree () {
      this.$router.push({
        path: "/serve/recovery/home/addressM",
      });
    },
    add () {
      this.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.van-cell {
  padding-left: 0.45rem;
  padding-right: 0.45rem;
  /deep/ span {
    font-size: 0.27rem;
  }
}
.adress {
  border-bottom: 0.2rem #f7f7f7 solid;
  .item {
    display: flex;
    flex-direction: column;
    .location {
      display: flex;
      align-items: center;
      font-size: 0.36rem;
      .van-icon {
        margin-right: 0.1rem;
      }
    }
    .adress-text {
      font-size: 0.36rem;
      font-weight: 600;
    }
    .phone {
      font-size: 0.24rem;
      color: #999;
    }
  }
}

// 添加服务
.add-serve {
  padding: 0.6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .tips {
    font-size: 0.27rem;
    color: #999;
  }
  .checked {
    padding: 0.45rem;
    padding-bottom: 0;
    box-sizing: border-box;
    font-size: 0.27rem;
    color: #333;
  }
  .btn {
    margin-top: 0.4rem;
    width: 3.24rem;
    height: 0.76rem;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    color: #ccc;
    border: #ccc solid 1px;
    span {
      margin-left: 0.1rem;
    }
  }
}
.item {
  .tips {
    font-size: 0.2rem;
    margin-left: 0.1rem;
    color: #c3ab87;
  }
}
.none {
  /deep/ .van-datetime-picker {
    /deep/ .van-picker__columns {
      .van-picker-column:first-child,
      .van-picker-column:nth-child(2) {
        display: none;
      }
      .van-picker-column:nth-child(3) {
        display: none;
      }
    }
  }
}

.form-list {
  border-bottom: 0.2rem #f7f7f7 solid;
  .van-uploader /deep/ .van-uploader__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.3rem;
  }

  /deep/ .van-uploader__preview-image {
    width: 2rem;
    height: 2rem;
  }
  /deep/ .van-uploader__preview {
    margin: 0;
  }
  /deep/ .van-uploader__upload {
    width: 2rem;
    height: 2rem;
    margin: 0;
  }
  //照片上传
  .photos {
    padding: 0.2rem 0.45rem;
    box-sizing: border-box;
  }
}
.foot {
  padding-bottom: 0.4rem;
  .footer {
    padding: 0 0.45rem;
    .agreement {
      font-size: 0.2rem;
      display: inline-block;
      color: #999;
      padding: 0.4rem 0;
    }
    .submit {
      display: flex;
      justify-content: space-between;
      margin-top: 0.27rem;

      span {
        display: inline-block;
        width: 3rem;
        height: 0.87rem;
        text-align: center;
        align-items: center;
        background: #c3ab87;
        line-height: 0.87rem;
        color: #f7f7f7;
        font-size: 0.26rem;
        border-radius: 40px;
      }
    }
  }
}
</style>