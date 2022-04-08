<template src="./product-complete-table-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCompleteTableGridBase } from './product-complete-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductCompleteTableGrid
 * @extends {ProductCompleteTableGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductCompleteTableGrid extends ProductCompleteTableGridBase {
    /**
     * 合计行绘制
     *
     * @param {any} param
     * @memberof ProductCompleteTableGridBase
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
                if(Object.is(column.property,'storycnt')){
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
                if(Object.is(column.property,'finishedstorycnt')){
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
                if(Object.is(column.property,'importantbugpercent')){
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
        if (sums && sums[1]){
            let sumss = parseFloat(((sums[2]/sums[1])*100).toString()).toFixed(2);
            sumss += '%';
            sums[3] = sumss;
        }
        return sums;
    }
}
</script>
