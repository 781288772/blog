(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{702:function(t,v,_){"use strict";_.r(v);var d=_(17),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"应用生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用生命周期"}},[t._v("#")]),t._v(" 应用生命周期")]),t._v(" "),_("p",[t._v("uni-app 支持如下应用生命周期函数：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("onLaunch")]),t._v(" "),_("td",[t._v("当uni-app "),_("strong",[t._v("初始化完成")]),t._v("时触发（全局只触发一次）")])]),t._v(" "),_("tr",[_("td",[t._v("onShow")]),t._v(" "),_("td",[t._v("当 uni-app "),_("strong",[t._v("启动")]),t._v("，或"),_("strong",[t._v("从后台进入前台")]),t._v("显示")])]),t._v(" "),_("tr",[_("td",[t._v("onHide")]),t._v(" "),_("td",[t._v("当 uni-app 从前台进入后台")])]),t._v(" "),_("tr",[_("td",[t._v("onError")]),t._v(" "),_("td",[t._v("当 uni-app 报错时触发")])]),t._v(" "),_("tr",[_("td",[t._v("onUniNViewMessage")]),t._v(" "),_("td",[t._v("对 nvue 页面发送的数据进行监听")])]),t._v(" "),_("tr",[_("td",[t._v("onUnhandledRejection")]),t._v(" "),_("td",[t._v("对未处理的 Promise 拒绝事件监听函数（2.8.1+）")])]),t._v(" "),_("tr",[_("td",[t._v("onPageNotFound")]),t._v(" "),_("td",[t._v("页面不存在监听函数")])]),t._v(" "),_("tr",[_("td",[t._v("onThemeChange")]),t._v(" "),_("td",[t._v("监听系统主题变化")])])])]),t._v(" "),_("h1",{attrs:{id:"页面生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面生命周期"}},[t._v("#")]),t._v(" 页面生命周期")]),t._v(" "),_("p",[t._v("uni-app 支持如下页面生命周期函数：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("平台差异说明")]),t._v(" "),_("th",[t._v("最低版本")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("onInit")]),t._v(" "),_("td",[t._v("监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad")]),t._v(" "),_("td",[t._v("百度小程序")]),t._v(" "),_("td",[t._v("3.1.0+")])]),t._v(" "),_("tr",[_("td",[t._v("onLoad")]),t._v(" "),_("td",[t._v("监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onShow")]),t._v(" "),_("td",[t._v("监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onReady")]),t._v(" "),_("td",[t._v("监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onHide")]),t._v(" "),_("td",[t._v("监听页面隐藏")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onUnload监听页面卸载")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onResize")]),t._v(" "),_("td",[t._v("监听窗口尺寸变化")]),t._v(" "),_("td",[t._v("App、微信小程序")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onPullDownRefresh")]),t._v(" "),_("td",[t._v("监听用户下拉动作，一般用于下拉刷新")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onReachBottom")]),t._v(" "),_("td",[t._v("页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onTabItemTap")]),t._v(" "),_("td",[t._v("点击 tab 时触发，参数为Object，具体见下方注意事项")]),t._v(" "),_("td",[t._v("微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onShareAppMessage")]),t._v(" "),_("td",[t._v("用户点击右上角分享")]),t._v(" "),_("td",[t._v("微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[t._v("#组件生命周期")]),t._v(" "),_("p",[t._v("uni-app 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("平台差异说明")]),t._v(" "),_("th",[t._v("最低版本")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("beforeCreate")]),t._v(" "),_("td",[t._v("在实例初始化之后被调用。详见")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("created")]),t._v(" "),_("td",[t._v("在实例创建完成后被立即调用。详见")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("beforeMount")]),t._v(" "),_("td",[t._v("在挂载开始之前被调用。详见")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("mounted")]),t._v(" "),_("td",[t._v("挂载到实例上去之后调用。详见 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("beforeUpdate")]),t._v(" "),_("td",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。详见")]),t._v(" "),_("td",[t._v("仅H5平台支持")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("updated")]),t._v(" "),_("td",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。详见")]),t._v(" "),_("td",[t._v("仅H5平台支持")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("beforeDestroy")]),t._v(" "),_("td",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。详见")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("destroyed")]),t._v(" "),_("td",[t._v("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。详见")]),t._v(" "),_("td"),t._v(" "),_("td")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);