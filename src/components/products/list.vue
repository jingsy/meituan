<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from "./item";
import api from '@/api/index.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        {
          image:
            "data:image/jpeg;base64,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",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxx",
              evalaute: "棒～"
            }
          ],
          tab: ['火锅','沙河'],
          address: "昌平小汤山村",
          "avg_price": 64,
          deal_items: [
            {
              title: "火鸡宴，建议10-14人",
              price: 909,
              counter_price: 1150,
              saleNum: 0,
              price_type: "元"
            }
          ]
        }
      ]
    };
  },
  components: {
    Item
  },
  created(){
    api.getProductsList().then(res=>{
      console.log(res);
      this.productList = res.data.data
    })
  }
};
</script>