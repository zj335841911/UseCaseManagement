<template src="./index-type-dataview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IndexTypeDataViewBase } from './index-type-dataview-base';
 

/**
 * dataview部件
 *
 * @export
 * @class IndexTypeDataView
 * @extends {IndexTypeDataViewBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IndexTypeDataView extends IndexTypeDataViewBase {}
</script>
