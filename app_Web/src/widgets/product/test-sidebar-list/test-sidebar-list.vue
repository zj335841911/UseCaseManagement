<template src="./test-sidebar-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSidebarListBase } from './test-sidebar-list-base';
 

/**
 * list部件
 *
 * @export
 * @class TestSidebarList
 * @extends {TestSidebarListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestSidebarList extends TestSidebarListBase { 
    /**
     * 刷新
     *
     * @param {*} [args]
     * @memberof TestSidebarList
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
