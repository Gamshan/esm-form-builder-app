(globalThis.webpackChunk_openmrs_esm_form_builder_app=globalThis.webpackChunk_openmrs_esm_form_builder_app||[]).push([[77],{76077:(e,t,n)=>{"use strict";n.r(t),n.d(t,{addQuestionModal:()=>y,deleteFormModal:()=>A,deletePageModal:()=>f,deleteQuestionModal:()=>h,deleteSectionModal:()=>m,editQuestionModal:()=>b,importTranslation:()=>l,newFormModal:()=>s,newPageModal:()=>u,newSectionModal:()=>p,restoreDraftSchemaModal:()=>g,root:()=>c,startupApp:()=>v,systemAdministrationFormBuilderCardLink:()=>d,unpublishFormModal:()=>_});var o=n(25987),r={questionTypes:{_type:o.Type.Array,_description:"Provides information that the processor uses to render a field",_default:["control","encounterDatetime","encounterLocation","encounterProvider","encounterRole","obs","obsGroup","patientIdentifier","personAttribute","testOrder","programState"]},fieldTypes:{_type:o.Type.Array,_description:"An array of available field types. A question can have only one field type, and the field type determines how the question is rendered.",_default:["date","drug","field-set","file","group","checkbox","checkbox-searchable","number","problem","radio","repeating","select","text","textarea","ui-select-extended","toggle"]},showSchemaSaveWarning:{_type:o.Type.Boolean,_default:!0,_description:"Whether to show a warning about possibly losing data in the forms dashboard"},dataTypeToRenderingMap:{_description:"A map used to match concept datatypes to rendering types",_type:o.Type.Object,_default:{Numeric:["number","fixed-value"],Coded:["select","checkbox","checkbox-searchable","radio","content-switcher","fixed-value","markdown","ui-select-extended","drug","problem","encounter-provider","encounter-location","select-concept-answers","encounter-role"],Text:["text","textarea","fixed-value"],Date:["date","fixed-value"],Datetime:["datetime","fixed-value"],Boolean:["toggle","select","radio","content-switcher","fixed-value"],Rule:["repeating","group"],"N/A":[],Complex:["file"]}},enableFormValidation:{_type:o.Type.Boolean,_default:!1,_description:"Whether to enable form validation"},blockRenderingWithErrors:{_type:o.Type.Boolean,_default:!1,_description:"Whether to enable form validation"}},i="@openmrs/esm-form-builder-app",a={featureName:"form-builder",moduleName:i},l=n(26738),c=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(544),n.e(784),n.e(72),n.e(488),n.e(629)]).then(n.bind(n,80432))}),a),d=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(454)]).then(n.bind(n,90454))}),a),s=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(65)]).then(n.bind(n,48065))}),a),u=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(433)]).then(n.bind(n,30433))}),a),f=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(279)]).then(n.bind(n,34279))}),a),p=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(821)]).then(n.bind(n,77821))}),a),m=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(827)]).then(n.bind(n,88827))}),a),y=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(544),n.e(72),n.e(488),n.e(130)]).then(n.bind(n,99130))}),a),h=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(398)]).then(n.bind(n,86398))}),a),b=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(544),n.e(72),n.e(488),n.e(130),n.e(850)]).then(n.bind(n,41850))}),a),g=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(458)]).then(n.bind(n,11458))}),a),_=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(311)]).then(n.bind(n,60311))}),a),A=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(504),n.e(72),n.e(488),n.e(152)]).then(n.bind(n,75152))}),a);function v(){(0,o.defineConfigSchema)(i,r)}},26738:(e,t,n)=>{var o={"./am.json":[81197,197],"./en.json":[34300,300],"./es.json":[93099,99],"./fr.json":[94055,55],"./he.json":[84652,652],"./km.json":[54335,335]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=26738,e.exports=r}}]);