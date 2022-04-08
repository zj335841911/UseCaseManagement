<template src="./exp-main-project-member-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpMainProjectMemberGridBase } from './exp-main-project-member-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class ExpMainProjectMemberGrid
 * @extends {ExpMainProjectMemberGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpMainProjectMemberGrid extends ExpMainProjectMemberGridBase {}
</script>
