<template>
    <group-step-table class="grid" 
        groupfield="type"
        :data="items"
        :cols="allColumns"
        :isEdit="actualIsOpenEdit"
        @change="gridEditItemChange.apply(_self, arguments)"
        @remove="remove.apply(_self, arguments)"
        @add="add.apply(_self, arguments)">
        <template slot="desc" slot-scope="{row, $index, column}">
        <input-box 
        
        :disabled="getColumnDisabled(row,column.property)" 
        v-model="row[column.property]" 
        style=""
        type="text"
        
        :placeholder="Object.is(row.type,'step') ? '步骤名称': Object.is(row.type,'group') ? '分组名称' : Object.is(row.type,'item') ? '分组步骤名称': ''"
        @change="($event)=>{gridEditItemChange(row, column.property, $event, $index)}"
    ></input-box>

        </template>
        <template slot="type" slot-scope="{row, $index, column}">
        
    <dropdown-list 
        
        v-model="row[column.property]" 
        :disabled="getColumnDisabled(row,column.property)" 
        :data="row" 
        :context="context"
        :viewparams="viewparams" 
        :localContext='{ }' 
        :localParam='{ }' 
        tag="Casestep__type" 
        codelistType="STATIC"
        placeholder="请选择..." 
        style="" 
        @change="($event)=>{gridEditItemChange(row, column.property, $event, $index)}"
    ></dropdown-list>

        </template>
        <template slot="expect" slot-scope="{row, $index, column}">
        <input-box 
        
        :disabled="getColumnDisabled(row,column.property)" 
        v-model="row[column.property]" 
        style=""
        type="text"
        
        
        @change="($event)=>{gridEditItemChange(row, column.property, $event, $index)}"
    ></input-box>

        </template>
    </group-step-table>
</template>
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_RowEditGridBase } from './main-row-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_RowEditGrid
 * @extends {Main_RowEditGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_RowEditGrid extends Main_RowEditGridBase {}
</script>
