<template src="./weekly-msg-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WeeklyMsgEditFormBase } from './weekly-msg-form-base';
 

/**
 * form部件
 *
 * @export
 * @class WeeklyMsgEditForm
 * @extends {WeeklyMsgEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class WeeklyMsgEditForm extends WeeklyMsgEditFormBase {}
</script>
