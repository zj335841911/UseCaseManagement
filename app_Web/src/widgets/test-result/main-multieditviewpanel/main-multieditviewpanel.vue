<template src="./main-multieditviewpanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainMultieditviewpanelBase } from './main-multieditviewpanel-base';
 

/**
 * meditviewpanel部件
 *
 * @export
 * @class MainMultieditviewpanel
 * @extends {MainMultieditviewpanelBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainMultieditviewpanel extends MainMultieditviewpanelBase {

     /**
          * 保存数据
          *
          * @memberof Meditviewpanel
          */
        public saveData(data?: any) {
            this.$emit("drdatasaved",{action:'drdatasaved'});
        }

 }
</script>
