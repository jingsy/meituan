<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item) in classicList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item) in areaList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
    </div>
</template>


<script>
import MSelect from './select'
export default {
    data() {
        return {
            classicList:[{
                title:"美食",
                type:"food",
                sub_list:[
                    {
                        name:'日本菜',
                        id:'Japan'
                    }
                ]
            }],
             areaList:[{
                title:"推荐商圈",
                sub_list:[
                    {
                        name:'望京',
                        id:'120000'
                    }
                ]
            }]
        }
    },
    components:{
        MSelect
    }
}
</script>