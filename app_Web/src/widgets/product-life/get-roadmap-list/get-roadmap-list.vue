<template src="./get-roadmap-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapListBase } from './get-roadmap-list-base';
 

/**
 * list2部件
 *
 * @export
 * @class GetRoadmapList
 * @extends {GetRoadmapListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GetRoadmapList extends GetRoadmapListBase {}
</script>
