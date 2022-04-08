<template src="./trends-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TrendsListBase } from './trends-list-base';
 

/**
 * list部件
 *
 * @export
 * @class TrendsList
 * @extends {TrendsListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TrendsList extends TrendsListBase {}
</script>
