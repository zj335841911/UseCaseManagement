<template>
    <div :class="{ 'employee-load':true, 'grid': true, 'show-paging-bar': isEnablePagingBar, 'hidden-paging-bar': !isEnablePagingBar }">
        <i-form>
        <el-table v-if="isDisplay === true"
            :span-method="rowSpanMethod"
            :cell-style="{background:'#fff',borderBottom:'solid 1px #e8e8e8',borderRight:'solid 1px #e8e8e8'}"
            size="mini"
            stripe
            :height="tableHeight"
            ref='multipleTable' :data="itemsRenderList" :show-header="!isHideHeader">
                <template slot="empty">
                    无数据 
                    <span class="quick-toolbar">
                    </span>
                </template>
                <template v-if="!isSingleSelect">
                    <el-table-column align="center" type='selection' :width="checkboxColWidth"></el-table-column>
                </template>
                <template v-if="getColumnState('assignedto')">
                    <el-table-column show-overflow-tooltip :prop="'assignedto'" :label="$t('entities.employeeload.main_grid.columns.assignedto')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.assignedto')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.assignedto" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('projectname')">
                    <el-table-column show-overflow-tooltip :prop="'projectname'" :label="$t('entities.employeeload.main_grid.columns.projectname')" :min-width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.projectname')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <app-column-link deKeyField='project' :context="JSON.parse(JSON.stringify(context))" :viewparams="JSON.parse(JSON.stringify(viewparams))" :data="row" :linkview="{viewname: 'project-main-tab-exp-view', height: 0,width: 0,title: $t('entities.project.views.maintabexpview.title'),placement: '', isRedirectView: false,deResParameters: [
                ]
                ,parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' }
                ]}" valueitem="project">
                                <span>{{row.projectname}}</span>
                            </app-column-link >
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('taskcnt')">
                    <el-table-column show-overflow-tooltip :prop="'taskcnt'" :label="$t('entities.employeeload.main_grid.columns.taskcnt')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.taskcnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.taskcnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('left')">
                    <el-table-column show-overflow-tooltip :prop="'left'" :label="$t('entities.employeeload.main_grid.columns.left')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.left')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.left}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('totaltaskcnt')">
                    <el-table-column show-overflow-tooltip :prop="'totaltaskcnt'" :label="$t('entities.employeeload.main_grid.columns.totaltaskcnt')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.totaltaskcnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.totaltaskcnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('totalleft')">
                    <el-table-column show-overflow-tooltip :prop="'totalleft'" :label="$t('entities.employeeload.main_grid.columns.totalleft')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.totalleft')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.totalleft}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('workload')">
                    <el-table-column show-overflow-tooltip :prop="'workload'" :label="$t('entities.employeeload.main_grid.columns.workload')" :width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.employeeload.main_grid.columns.workload')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.workload}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="adaptiveState">
                    <el-table-column></el-table-column>
                </template>
        </el-table>
    </i-form>
    </div>
</template>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing, Watch } from '@/studio-core';
import { MainGridBase } from './main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainGrid
 * @extends {MainGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainGrid extends MainGridBase { 
    /**
     * 数据项合并行规则数组
     * @type {Array<any>}
     * @memberof MainGrid
     */
    public infoList:Array<any> = [];

    /**
     * 表格渲染所需数组
     * @type {Array<any>}
     * @memberof MainGrid
     */
    public itemsRenderList:Array<any> = [];

    /**
     * 监听items
     * @memberof MainGrid
     */
    @Watch("items")
    public itemsWatch(newVal:any, oldVal:any) {
        if (newVal) {
            // 重置渲染数组和规则数组
            this.itemsRenderList.length = 0;
            this.infoList.length = 0;
            this.itemsRenderList.push(...newVal);
            // 排序并合并设置合并行规则
            this.listSort();
            this.setRowSpanRule();
        }
    }
    // assignedto
    /**
     * 根据需要合并的列排序
     * @memberof MainGrid
     */
    public listSort() {
        this.itemsRenderList.sort((prev:any, next:any) => {
            if (prev['assignedto'] !== next['assignedto']) {
                return prev['assignedto'].localeCompare(next['assignedto'])
            }
        })
    }

    /**
     * 设置合并行规则
     * @memberof MainGrid
     */
    public setRowSpanRule() {
        let tempArray:Array<any> = [];
        this.itemsRenderList.forEach((item:any) => {
            let firstIndex:number = this.itemsRenderList.findIndex((curr:any) => {return curr.assignedto === item.assignedto;});
            if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
                tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.assignedto === item.assignedto}).length,firstIndex:firstIndex})
            }
        })
        this.infoList = [...tempArray];
    }

    /**
     * Element合并单元格所需方法
     * @memberof MainGrid
     */
    public rowSpanMethod({ row, column, rowIndex, columnIndex }:{row:any, column:any, rowIndex:any, columnIndex:any}) {
        if (columnIndex === 0 || columnIndex === 4 || columnIndex === 5 || columnIndex === 6) {
            let index = this.infoList.findIndex((item:any) => {
                return item.firstIndex === rowIndex;
            })
            if (index > -1) {
                return {
                    rowspan: this.infoList[index].length,
                    colspan: 1
                }
            } else {
                return {
                    rowspan: 0,
                    colspan: 0
                }
            }
        }
    }
}
</script>

<style lang="less">
    .employee-load {
        .el-table .cell.el-tooltip {
            width: auto !important;
        }
    }  
</style>
