<template src="./sidebar-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SidebarListBase } from './sidebar-list-base';
 

/**
 * list部件
 *
 * @export
 * @class SidebarList
 * @extends {SidebarListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class SidebarList extends SidebarListBase { 
    /**
     * 刷新
     *
     * @param {*} [args]
     * @memberof SidebarList
     */
    public refresh(args?: any) {
        if(args){
            this.load(args);
        }else{
            this.isAddBehind = true;
            this.load(args);
        }
    }
}
</script>
