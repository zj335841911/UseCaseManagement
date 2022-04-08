<template src="./burn-down2-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnDown2ChartBase } from './burn-down2-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class BurnDown2Chart
 * @extends {BurnDown2ChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BurnDown2Chart extends BurnDown2ChartBase {

    /**
     * 获取图表数据
     * 
     * @returns {*} 
     * @memberof ChartBase
     */
    public load(opt?:any) {
        let _this = this;
        const arg: any = { ...opt };
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(arg,{viewparams:tempViewParams});
        Object.assign(arg,{page:0,size:1000});
        this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg,this.showBusyIndicator).then((res) => {
            if (res) {
                if(parentdata && parentdata.isweekend){
                    this.chartOption.xAxis.forEach((xAix: any)=>{
                        xAix.axisLabel = {interval: parseInt(parentdata.isweekend)}
                    })
                }else{
                    this.chartOption.xAxis.forEach((xAix: any)=>{
                        xAix.axisLabel = {interval: 0}
                    })
                }
                this.transformToBasicChartSetData(res.data,(codelist:any) =>{_this.drawCharts(codelist)});
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    
}
</script>
