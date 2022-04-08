<template src="./product-bug-status-count-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugStatusCountGridBase } from './product-bug-status-count-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugStatusCountGrid
 * @extends {ProductBugStatusCountGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugStatusCountGrid extends ProductBugStatusCountGridBase {
    /**
     * 合计行绘制
     *
     * @param {any} param
     * @memberof ProductBugStatusCountGridBase
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
                if(Object.is(column.property,'bugresolved')){
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
                if(Object.is(column.property,'bugclosed')){
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
                if(Object.is(column.property,'bugactive')){
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
        let divisor = sums[1] + sums[2] + sums[3];
        if(sums && divisor) {
            let sumss = (((sums[1] + sums[2]) / divisor) * 100).toFixed(2);
            sumss += "%";
            sums[4] = sumss;
        } else {
            sums[4] = '0.00%';
        }
        return sums;
    }
}
</script>
