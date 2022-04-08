<template src="./case-result-entry-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseResultEntryGridBase } from './case-result-entry-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class CaseResultEntryGrid
 * @extends {CaseResultEntryGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CaseResultEntryGrid extends CaseResultEntryGridBase { }
</script>
