<template src="./more-undone-project-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreUndoneProjectGridBase } from './more-undone-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MoreUndoneProjectGrid
 * @extends {MoreUndoneProjectGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreUndoneProjectGrid extends MoreUndoneProjectGridBase {}
</script>
