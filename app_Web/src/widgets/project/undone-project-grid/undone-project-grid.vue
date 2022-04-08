<template src="./undone-project-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UndoneProjectGridBase } from './undone-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class UndoneProjectGrid
 * @extends {UndoneProjectGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UndoneProjectGrid extends UndoneProjectGridBase {}
</script>
