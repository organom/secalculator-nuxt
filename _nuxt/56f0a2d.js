(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(e,t,o){var content=o(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(68).default)("79c75df1",content,!0,{sourceMap:!1})},204:function(e,t,o){"use strict";o(198)},205:function(e,t,o){var l=o(67)(!1);l.push([e.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),e.exports=l},225:function(e,t,o){"use strict";o.r(t);var l={name:"blocks",computed:{baseBlocks:function(){return this.$store.state.base.blocks}},methods:{goBack:function(){return this.$router.go(-1)}},data:function(){return{columns:[{label:"DisplayName",field:"DisplayName"},{label:"CubeSize",field:"CubeSize"},{label:"Type",field:"Id.TypeId"},{label:"Subtype",field:"Id.SubtypeId"},{label:"Description",field:"ParsedDescription"},{label:"PCU",field:"PCU"},{label:"BuildTimeSeconds",field:"BuildTimeSeconds"},{label:"RequiredPowerInput",field:"RequiredPowerInput"},{label:"Components",field:"ParsedComponents"},{label:"Components_original",field:"Components"}],rows:[],totalRecords:0}}},n=(o(204),o(53)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("h1",{staticClass:"title"},[e._v("\n      secalculator\n    ")]),e._v(" "),o("div",{staticClass:"links"},[o("button",{staticClass:"button--grey",on:{click:e.goBack}},[e._v("Back")])])]),e._v(" "),o("h2",[e._v(" ")]),e._v(" "),o("div",[o("div",[e._v("Total Blocks loaded: "+e._s(this.baseBlocks.length))]),e._v(" "),o("vue-good-table",{attrs:{columns:e.columns,rows:e.baseBlocks,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPage:40,perPageDropdown:[10,20,40,80,120,160,200]},styleClass:"vgt-table striped"}},[o("div",{attrs:{slot:"emptystate"},slot:"emptystate"},[e._v("\n        No data... please reload root of the website in order to have data!\n      ")])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);