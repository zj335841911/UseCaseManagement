<template src="./exp-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpListBase } from './exp-list-base';
 

/**
 * listexpbar_list部件
 *
 * @export
 * @class ExpList
 * @extends {ExpListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpList extends ExpListBase {}
</script>
