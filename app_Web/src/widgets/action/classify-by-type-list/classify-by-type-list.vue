<template src="./classify-by-type-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ClassifyByTypeListBase } from './classify-by-type-list-base';
 

/**
 * list部件
 *
 * @export
 * @class ClassifyByTypeList
 * @extends {ClassifyByTypeListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ClassifyByTypeList extends ClassifyByTypeListBase {

    /**
     * 部件挂载完毕
     *
     * @memberof ClassifyByTypeListBase
     */
    public ctrlMounted(): void {
        super.ctrlMounted();
        if (this.context && isExistAndNotEmpty(this.context.objecttype)) {
            this.accLocalTags.push(this.$acc.commandLocal(() => {
                this.refresh();
            }, 'all', this.context.objecttype.toUpperCase()));
        }
    }

}
</script>
