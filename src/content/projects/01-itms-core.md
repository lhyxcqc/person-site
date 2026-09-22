---
title: 企业级视频监控平台 ITMS · 主系统
summary: 面向大型企业的视频监控综合管理平台（aster.itms-shiyou），负责同步统计、视频质量考核、OSD 归档等核心模块。
role: 第一作者 / 核心开发
stack: [C#, .NET 6, ASP.NET, MySQL, Redis, RabbitMQ, SignalR, GB28181]
tags: [视频监控系统, 同步统计, 质量考核 VQD, 事件中心, 性能优化]
features:
  - name: 企业同步统计
    desc: 按天/概览/汇总统计、存量点位数计算、导出与下级异常筛选
  - name: 视频质量考核 VQD
    desc: 轮次机制、复核台筛选、事务一致性、诊断状态获取
  - name: OSD 命名规范归档
    desc: 轮次/归档表字段、目录名改企业名、积压异常修复
  - name: 捷诺平台 SDK
    desc: JnptSdkServer 与事件中心、兼容旧国标 HTTP/MQ 上报
  - name: 区域树与权限
    desc: 区域树构建性能优化、GB28181 兼容、权限过滤优化
challenge: 多平台点位海量同步下统计口径复杂、质量考核轮次易异常、区域树查询存在性能瓶颈。
solution: 设计企业同步统计（按天/概览/汇总）与导出能力；落地视频质量考核 VQD 轮次机制与事务一致性；通过 SDK 事件中心对接第三方平台；优化区域树构建与权限过滤。
result: 沉淀同步统计与质量考核完整能力，平台日均点位同步与考核轮次稳定运行，区域树查询性能显著提升。
order: 10
---
