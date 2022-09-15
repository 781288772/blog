(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{347:function(t,e,v){"use strict";v.r(e);var r=v(4),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在日常 coding 的过程中免不了分支之间的合并，回滚、提交、打 tag 等操作，如果你现在还不知道怎么使用 git 工具回滚代码，或者总是担心出错没有把握怕把代码搞丢，这很危险毕竟代码搞丢是很大的事情小则扣绩效重则多扣点，但是 dont worry，你很幸运能看到这篇文章，当你看完以后就不会在有代码丢失的情况，因为我会带你手把手建分支模拟回滚的常见情况")]),t._v(" "),e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。")]),t._v(" "),e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在日常的代码回滚中常用的有两种方式 git revert 和 git reset 来进行回滚，这两种分别对应的不同的情况我尽量简单明了的介绍这两个命令都能做些什么，接下来我会从个人仓库新拉个分支从 0 开始，建两个分支，分别是主分支 master 和开发分支 develop 来进行模拟")]),t._v(" "),e("h1",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("h2",{attrs:{id:"reset-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset-介绍"}},[t._v("#")]),t._v(" reset 介绍")]),t._v(" "),e("p",[t._v("1、reset 的作用是当你希望提交的 commit 从历史记录中完全消失就可以用")]),t._v(" "),e("p",[t._v("2、比如你在 master 分支提交了 A--\x3eB--\x3eC 提交了三个记录，这个时候如果 C 记录有问题你想回滚到 B 就可以用 git reset 进行")]),t._v(" "),e("p",[t._v("3、这个命令大概率的情况都是用在我们主分支的，因为我们上线的分支一般是 master 分支然后从 develop 进行功能开发")]),t._v(" "),e("p",[t._v("4、开发完成之后将分支合并到 master，如果在上线之前发现合并的分支用问题可以将 develop 合并过来的分支进行回滚")]),t._v(" "),e("p",[t._v("5、说白了就是取消 develop 的本次合并")]),t._v(" "),e("p",[t._v("6、但是有一种情况就是协作开发的时候大家都合并到 master 之后就不能用 reset 强行回滚 commit 因为这样会把其他人的提交记录给冲掉，这时候就可以用 revert 来进行操作我们在下面说")]),t._v(" "),e("p",[t._v("制造一个分支模拟环境")]),t._v(" "),e("p",[t._v("1.从你自己的 git 仓库创建一个新项目之后拉到本地")]),t._v(" "),e("p",[t._v("2.创建一个 index.js 随便写点东西，之后提交到仓库")]),t._v(" "),e("p",[t._v("3.我们在终端使用 git log 查看 commit 可以看到目前只有一个刚才提交的 commit")]),t._v(" "),e("p",[t._v("4.我们从 master 分支迁出一个 develop 分支 git branch develop，并且切换到该分支 git checkout develop")]),t._v(" "),e("p",[t._v("5.在 develop 分支新增一段代码，这个时候 develop 的 commit 记录就新增了一条 B 的记录")]),t._v(" "),e("p",[t._v("6.在 develop 分支接着新增一段代码")]),t._v(" "),e("p",[t._v("7.看下 develop 分支和 master 分支最新的 commit 记录对比，可以看到 dev 分支领先 master 分支两个 commit")]),t._v(" "),e("p",[t._v("操作一下 reset 来感受一下")]),t._v(" "),e("p",[t._v("1.我们将 develop 分支的代码合并到 master，切换到 master 分支 执行 git merge develop")]),t._v(" "),e("p",[t._v("2.我们在 master 分支使用 git log 查看 commit 记录找到 B 记录，准备回滚这一条，回滚的时候不需要输入全部的 commid 一般是前 7 位就够用")]),t._v(" "),e("p",[t._v("3.重点来了我们使用 git reset 69fde2c 进行回滚，这个时候查看 log 记录发现最后一条新增 c 记录没有了，这里还有个问题如果直接使用 git push 推送会有以下提示。")]),t._v(" "),e("p",[t._v("这是因为本地的记录因为我们的回滚已经落后于仓库的代码了，这个使用需要使用 git push -f 进行强制提交")]),t._v(" "),e("h2",{attrs:{id:"revert-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert-介绍"}},[t._v("#")]),t._v(" revert 介绍")]),t._v(" "),e("p",[t._v("1、revert 的原理是，在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化。它不会改变过去的历史，所以是首选方式，没有任何丢失代码的风险")]),t._v(" "),e("p",[t._v("2、revert 可以抵消上一个提交，那么如果想要抵消多个需要执行 git revert 倒数第一个 commit id 倒数第二个 commit")]),t._v(" "),e("p",[t._v("3、这个就常用于当你提交了一次 commit 之后发现提交的可能有问题就可以用到 revert")]),t._v(" "),e("p",[t._v("4、还有一种情景是已经有很多人提交过代码，但是想改之前的某一次 commit 记录又不想影响后面的也可以使用 revert，他会把你后面提交的记录都放到工作区只是合并的时候需要注意一点")]),t._v(" "),e("p",[t._v("我们来模拟一下环境")]),t._v(" "),e("p",[t._v("1.切到 develop 分支现在该分支有三个 commit 记录")]),t._v(" "),e("p",[t._v("2.我们使用 rever 进行回滚试一下 git revert 16083ce，如果你也用的是 vs code 可以看到工作区的变化，并且在控制台可以提交默认的 commit")]),t._v(" "),e("p",[t._v("3.看一下 log 记录，可以看到新增了一个记录 Revert 新增 C，并且原来的新增 C 还是在的")]),t._v(" "),e("h2",{attrs:{id:"commit-记录打-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-记录打-tag"}},[t._v("#")]),t._v(" commit 记录打 tag")]),t._v(" "),e("p",[t._v("1、在上线之前我们需要对当前的 commit 记录打一个 tag 方便上线的代码有问题可以及时回滚")]),t._v(" "),e("p",[t._v("我们来介绍一下常用的几个命令")]),t._v(" "),e("p",[t._v("1.git tag 列出所有的 tag 列表")]),t._v(" "),e("p",[t._v("2.创建一个 tag，使用 git tag [name],我们新增一个 git tag 测试 4,在使用 git tag 查看一下")]),t._v(" "),e("p",[t._v("3.查看 tag 对应的 commit 信息，git show [tag 名字]，举个例子 git show 测试 1,上线之后如果有问题我们就可以根据 下图的 commit id 进行代码回滚")]),t._v(" "),e("h1",{attrs:{id:"结束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[t._v("#")]),t._v(" 结束")]),t._v(" "),e("p",[t._v("git 管理工具在我们日常中可以说是天天都在用，所以对于常见的问题场景对应的方法一定要牢牢地掌握免得遇到的时候显得捉襟见肘")])])}),[],!1,null,null,null);e.default=_.exports}}]);