<template src="./not-close-project-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { NotCloseProjectGridBase } from './not-close-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class NotCloseProjectGrid
 * @extends {NotCloseProjectGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class NotCloseProjectGrid extends NotCloseProjectGridBase {}
</script>
