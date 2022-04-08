<template src="./get-roadmap-year-s-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapYearSListBase } from './get-roadmap-year-s-list-base';
 

/**
 * list部件
 *
 * @export
 * @class GetRoadmapYearSList
 * @extends {GetRoadmapYearSListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GetRoadmapYearSList extends GetRoadmapYearSListBase {}
</script>
