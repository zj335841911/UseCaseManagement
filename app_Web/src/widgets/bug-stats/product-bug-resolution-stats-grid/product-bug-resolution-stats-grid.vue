<template src="./product-bug-resolution-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugResolutionStatsGridBase } from './product-bug-resolution-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugResolutionStatsGrid
 * @extends {ProductBugResolutionStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugResolutionStatsGrid extends ProductBugResolutionStatsGridBase {
    /**
     * 合计行绘制
     *
     * @param {any} param
     * @memberof ProductBugResolutionStatsGridBase
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
                if(Object.is(column.property,'bugwjj')){
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
                if(Object.is(column.property,'bugbydesign')){
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
                if(Object.is(column.property,'bugduplicate')){
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
                if(Object.is(column.property,'bugexternal')){
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
                if(Object.is(column.property,'bugfixed')){
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
                if(Object.is(column.property,'bugnotrepro')){
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
                if(Object.is(column.property,'bugpostponed')){
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
                if(Object.is(column.property,'bugwillnotfix')){
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
                if(Object.is(column.property,'bugtostory')){
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
                if(Object.is(column.property,'bugtotal')){
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
        let divisor = sums[2] + sums[3] + sums[4] + sums[5] + sums[6] + sums[7] + sums[8];
        if(sums && divisor) {
            let sumss = (((sums[5] + sums[7]) / divisor) * 100).toFixed(2);
            sumss += "%";
            sums[10] = sumss;
        } else {
            sums[10] = '0.00%';
        }
        return sums;
    }
}
</script>
