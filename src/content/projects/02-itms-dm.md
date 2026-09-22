---
title: ITMS 信创迁移版 · 达梦数据库适配
summary: 将企业视频监控平台整体迁移至达梦（DM）数据库，并交付专项行业版本，覆盖中心下载、SSO/IAM、国标资源共享。
role: 第一作者 / 迁移负责人
stack: [C#, .NET 6, 达梦 DM, Redis, RabbitMQ, SignalR, OrmLite]
challenge: MySQL → 达梦迁移涉及方言差异、排序规则冲突、严格 GROUP BY 约束，以及 id 类型由 string 改为 long 的连锁改造。
solution: 改用达梦方言接入并去除 Oracle 方言；处理字符集与 GROUP BY 适配；完成单位/用户/角色 id 类型改造、SSO/IAM 登录与国标资源共享逻辑；jwt/redis 同步与断线重连保活。
result: 平台在达梦数据库上稳定运行，信创环境落地；中心下载 V2、国标资源共享等模块完成迁移与验证。
tags: [信创, 达梦迁移, MySQL→DM, SSO/IAM, 国标资源共享]
order: 20
---
