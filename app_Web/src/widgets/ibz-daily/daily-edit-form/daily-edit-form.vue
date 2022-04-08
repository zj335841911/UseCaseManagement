<template src="./daily-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DailyEditEditFormBase } from './daily-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DailyEditEditForm
 * @extends {DailyEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DailyEditEditForm extends DailyEditEditFormBase {}
</script>
