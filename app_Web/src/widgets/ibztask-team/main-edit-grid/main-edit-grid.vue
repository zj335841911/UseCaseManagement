<template src="./main-edit-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditGridBase } from './main-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainEditGrid
 * @extends {MainEditGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainEditGrid extends MainEditGridBase {

    /**
     * 表格编辑项值变化
     *
     * @public
     * @param row 行数据
     * @param property 列编辑项名
     * @param row 列编辑项值
     * @returns {void}
     * @memberof GridControlBase
     */
    public gridEditItemChange(row: any, property: string, value: any, rowIndex: number): void {
        localStorage.setItem("newTaskTeam"+row.task,JSON.stringify(this.items));
        row.rowDataState = row.rowDataState ? row.rowDataState : 'update';
        this.curEditRowData = row;
        this.validate(property, row, rowIndex);
    }
}
</script>
