<template src="./my-finishedby-task-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyFinishedbyTaskChartBase } from './my-finishedby-task-chart-base';
import { ChartDataSetField,ChartLineSeries,ChartFunnelSeries,ChartPieSeries,ChartBarSeries,ChartRadarSeries} from '@/model/chart-detail';

/**
 * chart部件
 *
 * @export
 * @class MyFinishedbyTaskChart
 * @extends {MyFinishedbyTaskChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MyFinishedbyTaskChart extends MyFinishedbyTaskChartBase { 
    /**
     * 初始化图表所需参数
     *
     * @type {}
     * @memberof ChartBase
     */   
    public chartOption:any = {
        title:{
            show:true,
            text:'完成的任务数',
            subtext:'',
            x:'center',
            y:'center',
            textStyle: {
                fontSize: 20
            },
            subtextStyle: {
                fontSize:15
            }
        },
        legend:{
            show:true
        },
        tooltip:{
            show:true
        },
        dataset:[],
        series:[
                     {
            id:'myfinishedbytask',
            name:'',
            type:'pie',
            datasetIndex:0,
            startAngle:180,
            seriesLayoutBy:"column",
            encode:{
                itemName:"pri",
                value:"srfcount"
            }}
        ]
    };

    /**
     * 序列模型
     *
     * @type {}
     * @memberof ChartBase
     */
    public  seriesModel:any = {
        myfinishedbytask:new ChartPieSeries({
            name:'myfinishedbytask',
            categorField:'pri',
            valueField:'srfcount',
            seriesValues:[],
            seriesIndex:0,
            data:[],
            seriesMap:{},
            dataSetFields:[
                {name:"pri",codelist:null,isGroupField:true,groupMode:""},
                {name:"srfcount",codelist:null,isGroupField:false,groupMode:""}
            ],
            ecxObject:{
                label:{
                    show: false,
                    position: 'outside',
                },
                labelLine:{
                    show: true,
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle:{
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis:{
                    label: {
                        fontSize: 20
                    }
                }
            },
            ecObject:{
                radius:['60%', '70%'],
            },
            seriesTemp:{
                type:'pie',
            },
            baseOption:{},
            seriesLayoutBy:"column"
        })
    };

    /**
     * 获取图表数据
     * 
     * @returns {*} 
     * @memberof Dashboard_sysportlet6_chartBase
     */
    public load(opt?:any) {
        let _this = this;
        const arg: any = { ...opt };
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        Object.assign(arg,{viewparams:this.viewparams,page:0,size:1000});
        this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg,this.showBusyIndicator).then((res) => {
            if (res) {
               this.chartOption.title.subtext = `${res.data.length} 个`;
               this.transformToBasicChartSetData(res.data,(codelist:any) =>{_this.drawCharts(codelist)});
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
</script>
