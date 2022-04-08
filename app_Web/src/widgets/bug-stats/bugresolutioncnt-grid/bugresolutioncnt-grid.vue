<template src="./bugresolutioncnt-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BUGRESOLUTIONCNTGridBase } from './bugresolutioncnt-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BUGRESOLUTIONCNTGrid
 * @extends {BUGRESOLUTIONCNTGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BUGRESOLUTIONCNTGrid extends BUGRESOLUTIONCNTGridBase {}
</script>
