<template src="./project-team-pc-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamPcPanelBase } from './project-team-pc-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class ProjectTeamPcPanel
 * @extends {ProjectTeamPcPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTeamPcPanel extends ProjectTeamPcPanelBase {}
</script>
<style lang="less">
@import './project-team-pc-panel.less';
</style>
