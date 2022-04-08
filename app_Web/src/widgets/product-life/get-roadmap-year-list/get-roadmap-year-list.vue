<template src="./get-roadmap-year-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapYearListBase } from './get-roadmap-year-list-base';
 

/**
 * list部件
 *
 * @export
 * @class GetRoadmapYearList
 * @extends {GetRoadmapYearListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GetRoadmapYearList extends GetRoadmapYearListBase {}
</script>
