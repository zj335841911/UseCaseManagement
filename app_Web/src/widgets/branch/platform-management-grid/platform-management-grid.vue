<template src="./platform-management-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlatformManagementGridBase } from './platform-management-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PlatformManagementGrid
 * @extends {PlatformManagementGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PlatformManagementGrid extends PlatformManagementGridBase {}
</script>
