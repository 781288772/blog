(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{682:function(s,n,a){"use strict";a.r(n);var t=a(22),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"父组件重新请求网络数据并赋值给子组件-子组件渲染遗留有旧数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件重新请求网络数据并赋值给子组件-子组件渲染遗留有旧数据"}},[s._v("#")]),s._v(" 父组件重新请求网络数据并赋值给子组件，子组件渲染遗留有旧数据")]),s._v(" "),a("p",[s._v("前些天遇到这么一个问题：在一个个人信息页面上修改个人信息之后返回列表渲染页面，\n惊奇地发现列表的数据包含了更新信息之前的数据，也就是数据条数是原来的两倍，经过\n漫长的查找原因之后，找到了原因，组件没有刷新。找到问题所在的话，那么就可以着手\n来解决问题了。")]),s._v(" "),a("h2",{attrs:{id:"解决方案-使用v-if使子组件重新渲染-让组件强制刷新。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-使用v-if使子组件重新渲染-让组件强制刷新。"}},[s._v("#")]),s._v(" 解决方案：使用v-if使子组件重新渲染，让组件强制刷新。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//子组件\n<children v-if="isShow"></children>\n\n\n//重置子组件的数据\nclear(){\n    this.isShow = false;\n    this.$nextTick(()=>{\n    this.isShow = true;\n    })\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[s._v("#")]),s._v(" DONE!")])])}),[],!1,null,null,null);n.default=e.exports}}]);