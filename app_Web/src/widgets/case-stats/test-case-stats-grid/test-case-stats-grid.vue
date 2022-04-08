<template src="./test-case-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestCaseStatsGridBase } from './test-case-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TestCaseStatsGrid
 * @extends {TestCaseStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestCaseStatsGrid extends TestCaseStatsGridBase {
    /**
     * 合计行绘制
     *
     * @param {any} param
     * @memberof TestCaseStatsGridBase
     */
    public getSummaries(param:any){
        const { columns, data } = param;
        const sums:Array<any> = [];
        columns.forEach((column:any, index:number) => {
            if (index === 0) {
                sums[index] = (this.$t('app.gridpage.sum') as string);
                return;
            }
            if(index === (columns.length - 1)){
                sums[index] = '';
                return;
            }
            const values = data.map((item:any) => Number(item[column.property]));
            if (!values.every((value:any) => isNaN(value))) {
                if(Object.is(column.property,'totalcase')){
                    let tempData = values.reduce((prev:any, curr:any) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] = tempData;
                }
                if(Object.is(column.property,'passcase')){
                    let tempData = values.reduce((prev:any, curr:any) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] = tempData;
                }
                if(Object.is(column.property,'failcase')){
                    let tempData = values.reduce((prev:any, curr:any) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] = tempData;
                }
                if(Object.is(column.property,'blockedcase')){
                    let tempData = values.reduce((prev:any, curr:any) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] = tempData;
                }
                if(Object.is(column.property,'totalruncase')){
                    let tempData = values.reduce((prev:any, curr:any) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] = tempData;
                }
            } else {
                sums[index] = 'N/A';
            }
        });
        if(sums && sums[5]){
            let sumss = ((sums[2] / sums[5]) * 100).toFixed(2);
            sumss += "%";
            sums[6] = sumss;
        } else {
          sums[6] = '0.00%';
        }
        return sums;
    }
}
</script>
