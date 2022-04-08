<template>
    <div :class="{ 'bug-assigned': true, 'grid': true, 'show-paging-bar': isEnablePagingBar, 'hidden-paging-bar': !isEnablePagingBar }">
        <i-form>
        <el-table v-if="isDisplay === true"
            :cell-style="{background:'#fff',borderBottom:'solid 1px #e8e8e8',borderRight:'solid 1px #e8e8e8'}"
            size="mini"
            stripe
            :span-method="rowSpanMethod"
            :tree-props="{children: 'children', hasChildren: 'children?true:false'}"
            row-key="groupById"
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
<!--                <template>-->
<!--                    <el-table-column show-overflow-tooltip prop="group" label="分组" :min-width="80">-->
<!--                        <template v-slot="{row,column,$index}">-->
<!--                            <span>{{ row.group }}</span>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                </template>-->
                <template v-if="getColumnState('assignedto')">
                    <el-table-column show-overflow-tooltip :prop="'assignedto'" :label="$t('entities.bugstats.bugassignedto_grid.columns.assignedto')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.assignedto')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.assignedto" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('productname')">
                    <el-table-column show-overflow-tooltip :prop="'productname'" :label="$t('entities.bugstats.bugassignedto_grid.columns.productname')" :min-width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.productname')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <app-column-link deKeyField='product' :context="JSON.parse(JSON.stringify(context))" :viewparams="JSON.parse(JSON.stringify(viewparams))" :data="row" :linkview="{viewname: 'product-main-tab-exp-view', height: 0,width: 0,title: $t('entities.product.views.maintabexpview.title'),placement: '', isRedirectView: false,deResParameters: [
                ]
                ,parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' }
                ]}" valueitem="product">
                                <span>{{row.productname}}</span>
                            </app-column-link >
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('bugcnt')">
                    <el-table-column show-overflow-tooltip :prop="'bugcnt'" :label="$t('entities.bugstats.bugassignedto_grid.columns.bugcnt')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.bugcnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.bugcnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('bugtotal')">
                    <el-table-column show-overflow-tooltip :prop="'bugtotalnum'" :label="$t('entities.bugstats.bugassignedto_grid.columns.bugtotal')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.bugtotal')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.bugtotal}}</span>
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
import { BugassignedToGridBase } from './bugassigned-to-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BugassignedToGrid
 * @extends {BugassignedToGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugassignedToGrid extends BugassignedToGridBase { 
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
            //  设置bug合计数
            this.setBugTotal();
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
     * 设置bug合计列总数
     * @memberof MainGrid
     */
    public setBugTotal() {
        this.infoList.forEach((info: any) => {
            let tempArray:Array<any> = this.itemsRenderList.filter((curr: any) => {return curr.assignedto === info.firstIndex});
            let bugTotal: number = 0;
            tempArray.forEach((temp: any) => {
                bugTotal += temp.bugtotal;
            })
            this.itemsRenderList.forEach((item: any) => {
                if(item.assignedto === info.firstIndex) {
                    item.bugtotalnum = bugTotal;
                }
            })
        })
    }

    /**
     * 设置合并行规则
     * @memberof MainGrid
     */
    public setRowSpanRule() {
        let tempArray:Array<any> = [];
        //  分组情况下使用
        this.itemsRenderList.forEach((items: any) => {
            if(items.children && items.children.length > 0) {
                items.children.forEach((children: any, index: number) => {
                    children.parent_length = items.children.length;
                    if(index == 0) {
                        children.isFirstChildren = true;
                    }
                })
            }
        })
        //  原本逻辑
        // this.itemsRenderList.forEach((item:any) => {
        //     let firstIndex:number = this.itemsRenderList.findIndex((curr:any) => {return curr.assignedto === item.assignedto;});
        //     if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
        //         tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.assignedto === item.assignedto}).length,firstIndex:firstIndex})
        //     }
        // })
        // this.infoList = [...tempArray];
    }

    /**
     * Element合并单元格所需方法
     * @memberof MainGrid
     */
    public rowSpanMethod({ row, column, rowIndex, columnIndex }:{row:any, column:any, rowIndex:any, columnIndex:any}) {
        let allColumns:Array<any> = ['assignedto','productname','bugcnt','bugtotal'];
        //  分组时使用
        if(row && row.children) {
            if(columnIndex == (this.isSingleSelect ? 0:1)) {
                return [1, allColumns.length+1];
            } else if(columnIndex > (this.isSingleSelect ? 0:1)) {
                return [0,0];
            }
        } else if(row.parent_length && row.parent_length>0) {
            if((columnIndex === 0 || columnIndex === 1 || columnIndex === 4) && row.isFirstChildren) {
                return {
                    rowspan: row.parent_length,
                    colspan: 1
                };
            } else if((columnIndex === 0 || columnIndex === 1 || columnIndex === 4) && !row.isFirstChildren) {
                return [0,0];
            }
        }
        //  默认样式

        // if (columnIndex === 1) {
        //     let index = this.infoList.findIndex((item:any) => {
        //         return item.firstIndex === rowIndex;
        //     })
        //     if (index > -1) {
        //         return {
        //             rowspan: this.infoList[index].length,
        //             colspan: 1
        //         }
        //     } else {
        //         return {
        //             rowspan: 0,
        //             colspan: 0
        //         }
        //     }
        // }
    }
}
</script>

<style lang="less">
    .bug-assigned {
        .el-table .cell.el-tooltip {
            width: auto !important;
        }
    }  
</style>
