<template>
    <div class="full-text-search" >
        <i-input v-if="falg" clearable search @on-search="onSearch" size="small" :placeholder="$t('entities.ibizproindex.fields.indexname')+','+$t('entities.ibizproindex.fields.indexdesc')"></i-input>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, } from 'vue-property-decorator';
import { AppService } from '@/studio-core/service/app-service/AppService';

@Component({})
export default class FullTextSearch extends Vue{
    
    /**
     * 应用服务
     * 
     * @memberof FullTextSearch
     */
    protected appService: AppService = new AppService();

    /**
     * 路由跳转地址
     * 
     * @type {string}
     * @memberof FullTextSearch
     */
    @Prop()
    public path!: string;

    /**
     * 显示状态
     * 
     * @type {boolean}
     * @memberof FullTextSearch
     */
    public falg: boolean = true;

    /**
     * 路由记录缓存
     * 
     * @type {any[]}
     * @memberof FullTextSearch
     */
    public history: any[] = this.appService.navHistory.historyList;

    /**
     * 监听路由缓存记录变化
     * 
     * @memberof FullTextSearch
     */
    @Watch('history')
    public historyChange(newVal: any[], oldVal: any[]){
        if (newVal) {
            const index = newVal.findIndex((item: any) => Object.is(item.to.path,this.path));
            if(index != -1){
                this.falg = false;
            } else {
                this.falg = true;
            }
        } 
    }

    /**
     * 生命周期
     * 
     * @memberof FullTextSearch
     */
    public created(){
        if (this.history) {
            const index = this.history.findIndex((item: any) => Object.is(item.to.path,this.path));
            if(index != -1){
                this.falg = false;
            } else {
                this.falg = true;
            }
        }
    }

    /**
     * 执行全文检索时打开索引检索界面
     * 
     * @param query 检索值
     * @memberof FullTextSearch
     */
    public onSearch(query: string){
        if (query && !Object.is(query,'')) {
            if (this.path && !Object.is(this.path,'')) {
                this.$router.push({ path: this.path, query: { query: query } });
            } else{
                console.error(this.$t('app.fullTextSearch.pathError'));
            }
        } else {
            this.$Notice.error({ title: ''+this.$t('app.fullTextSearch.noticeTitle'), desc: ''+this.$t('app.fullTextSearch.noticeDesc')});
        }
    }
}
</script>
<style lang="less">
@import './full-text-search.less';
</style>