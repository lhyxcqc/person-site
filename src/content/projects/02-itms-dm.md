---
title: ITMS 信创迁移版 · 川庆二期 + 达梦适配
summary: 将企业视频监控平台整体迁移至达梦（DM）数据库，并交付专项行业版本（chuanqing-erqi-shiyou-dm），覆盖中心下载、SSO/IAM、国标资源共享。
role: 迁移负责人
stack: [C#, .NET 6, 达梦 DM, Redis, RabbitMQ, SignalR, OrmLite]
tags: [信创, 达梦迁移, MySQL→DM, SSO/IAM, 国标资源共享]
scope: 作为迁移负责人，主导平台 MySQL→达梦迁移与川庆二期交付，负责中心下载 V2、SSO/IAM、国标资源共享等模块的改造、接口开发与联调验证（含相关功能增删查改与数据适配）。
features:
  - name: 中心录像下载 V2
    desc: 代理地址转换、url 编码、转码配置同步 redis、空配置 bug 修复
  - name: SSO / IAM 登录
    desc: IAM 回调登录、账号白名单、登出记录与 redis 存储优化
  - name: 国标资源共享
    desc: 分批次统计、一键共享/取消、逻辑删除、编码重复检测、long 类型处理
  - name: 达梦数据库迁移
    desc: 单位/用户/角色 id 由 string 改为 long、字符集适配、依赖注入改造
  - name: 连接保活
    desc: SignalR 心跳、Rabbit 断线重连、join 已删除数据修复
challenge: MySQL → 达梦迁移涉及方言差异、排序规则冲突、严格 GROUP BY 约束，以及 id 类型由 string 改为 long 的连锁改造。
solution: 改用达梦方言接入并去除 Oracle 方言；处理字符集与 GROUP BY 适配；完成单位/用户/角色 id 类型改造、SSO/IAM 登录与国标资源共享逻辑；jwt/redis 同步与断线重连保活。
result: 平台在达梦数据库上稳定运行，信创环境落地；中心下载 V2、国标资源共享等模块完成迁移与验证。
order: 20
---
