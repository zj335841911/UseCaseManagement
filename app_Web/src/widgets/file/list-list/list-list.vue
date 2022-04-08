<template src="./list-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ListListBase } from './list-list-base';
 

/**
 * list部件
 *
 * @export
 * @class ListList
 * @extends {ListListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ListList extends ListListBase {}
</script>
