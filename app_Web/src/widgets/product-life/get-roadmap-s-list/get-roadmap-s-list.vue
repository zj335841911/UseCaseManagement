<template src="./get-roadmap-s-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapSListBase } from './get-roadmap-s-list-base';
 

/**
 * list2部件
 *
 * @export
 * @class GetRoadmapSList
 * @extends {GetRoadmapSListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GetRoadmapSList extends GetRoadmapSListBase {}
</script>
