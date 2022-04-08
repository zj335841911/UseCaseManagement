<template src="./group-trends-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GroupTrendsListBase } from './group-trends-list-base';
 

/**
 * list部件
 *
 * @export
 * @class GroupTrendsList
 * @extends {GroupTrendsListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GroupTrendsList extends GroupTrendsListBase {}
</script>
