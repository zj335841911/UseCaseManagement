<template>
    <div :class="{ 'product-sum': true, 'grid': true, 'show-paging-bar': isEnablePagingBar, 'hidden-paging-bar': !isEnablePagingBar }">
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
                <template v-if="getColumnState('name')">
                    <el-table-column show-overflow-tooltip :prop="'name'" :label="$t('entities.productsum.main_grid.columns.name')" :min-width="180"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.name')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.name}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('po')">
                    <el-table-column show-overflow-tooltip :prop="'po'" :label="$t('entities.productsum.main_grid.columns.po')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.po')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.po" tag='UserRealName_Gird' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('plan')">
                    <el-table-column show-overflow-tooltip :prop="'plan'" :label="$t('entities.productsum.main_grid.columns.plan')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.plan')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.plan" tag='PlanCodeList' codelistType='DYNAMIC' ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('begin')">
                    <el-table-column show-overflow-tooltip :prop="'begin'" :label="$t('entities.productsum.main_grid.columns.begin')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.begin')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.begin}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('end')">
                    <el-table-column show-overflow-tooltip :prop="'end'" :label="$t('entities.productsum.main_grid.columns.end')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.end')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.end}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('waitstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'waitstorycnt'" :label="$t('entities.productsum.main_grid.columns.waitstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.waitstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.waitstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('activestorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'activestorycnt'" :label="$t('entities.productsum.main_grid.columns.activestorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.activestorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.activestorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('changedstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'changedstorycnt'" :label="$t('entities.productsum.main_grid.columns.changedstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.changedstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.changedstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('closedstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'closedstorycnt'" :label="$t('entities.productsum.main_grid.columns.closedstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.closedstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.closedstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('storycnt')">
                    <el-table-column show-overflow-tooltip :prop="'storycnt'" :label="$t('entities.productsum.main_grid.columns.storycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.storycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.storycnt}}</span>
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
            //  产品负责人行合并
            this.setRowPoSpanRule();
        }
    }

    /**
     * 根据需要合并的列排序
     * @memberof MainGrid
     */
    public listSort() {
        this.itemsRenderList.sort((prev:any, next:any) => {
            if (prev['name'] !== next['name']) {
                return prev['name'].localeCompare(next['name'])
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
            let firstIndex:number = this.itemsRenderList.findIndex((curr:any) => {return curr.name === item.name;});
            if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
                tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.name === item.name}).length,firstIndex:firstIndex,mergeIndex: 1});
            }
        })
        this.infoList = [...tempArray];
    }

    /**
     * 产品负责人行合并
     * @memberof MainGrid
     */
    public setRowPoSpanRule() {
        let tempArray:Array<any> = [];
        this.itemsRenderList.forEach((item:any) => {
            let firstIndex: number = this.itemsRenderList.findIndex((curr: any) => {return curr.name === item.name && curr.po === item.po;});
            if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
                tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.name === item.name && curr.po === item.po}).length,firstIndex:firstIndex,mergeIndex: 2});
            }
        });
        this.infoList = this.infoList.concat(tempArray);
    }

    /**
     * Element合并单元格所需方法
     * @memberof MainGrid
     */
    public rowSpanMethod({ row, column, rowIndex, columnIndex }:{row:any, column:any, rowIndex:any, columnIndex:any}) {
        if (columnIndex === 0) {
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
        if(columnIndex === 1) {
            let index = this.infoList.findIndex((item: any) => {
                return item.firstIndex === rowIndex && item.mergeIndex === 2;
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
    .product-sum {
        .el-table .cell.el-tooltip {
            width: auto !important;
        }
    }  
</style>
