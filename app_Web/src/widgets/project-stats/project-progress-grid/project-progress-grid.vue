<template src="./project-progress-grid.html"/>
<script lang="tsx">
    import {Component} from 'vue-property-decorator';
    import {VueLifeCycleProcessing} from '@/studio-core';
    import {ProjectProgressGridBase} from './project-progress-grid-base';


    /**
     * grid部件
     *
     * @export
     * @class ProjectProgressGrid
     * @extends {ProjectProgressGridBase}
     */
    @Component({
        components: {},
    })
    @VueLifeCycleProcessing()
    export default class ProjectProgressGrid extends ProjectProgressGridBase {

        /**
         * 合计行绘制
         * @param param
         */
        public getSummaries(param: any) {
            const {columns, data} = param;
            const sums: Array<any> = [];
            columns.forEach((column: any, index: number) => {
                if (index === 0) {
                    sums[index] = (this.$t('app.gridpage.sum') as string);
                    return;
                }
                if (index === (columns.length - 1)) {
                    sums[index] = '';
                    return;
                }
                const values = data.map((item: any) => Number(item[column.property]));
                if (!values.every((value: any) => isNaN(value))) {
                    if (Object.is(column.property, 'storycnt')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] = tempData;
                    }
                    if (Object.is(column.property, 'leftstorycnt')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] = tempData;
                    }
                    if (Object.is(column.property, 'taskcnt')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] = tempData;
                    }
                    if (Object.is(column.property, 'undonetaskcnt')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] = tempData;
                    }
                    if (Object.is(column.property, 'totalleft')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] = tempData;
                    }
                    if (Object.is(column.property, 'totalconsumed')) {
                        let tempData = values.reduce((prev: any, curr: any) => {
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
            if (sums && sums[5] && sums[6]) {
                let sumss = parseFloat(((sums[6] / (sums[5] + sums[6])) * 100).toString()).toFixed(2);
                sumss += "%";
                sums[7] = sumss;
            }
            return sums;
        }
    }
</script>
