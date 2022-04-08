<template src="./product-input-table-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductInputTableGridBase } from './product-input-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductInputTableGrid
 * @extends {ProductInputTableGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductInputTableGrid extends ProductInputTableGridBase {
    /**
     * 合计行绘制
     *
     * @param {any} param
     * @memberof ProductInputTableGridBase
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
                if(Object.is(column.property,'resprojectcnt')){
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
                if(Object.is(column.property,'haveconsumed')){
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
        sums[2] = parseFloat(sums[2]).toFixed(2);
        return sums;
    }

}
</script>
