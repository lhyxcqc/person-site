---
title: Aster.Common 基础组件库
summary: 业务无关的基础功能库，通过私有 nuget 发布，支撑各业务系统的下载、推流与同步能力。
role: 核心贡献者
stack: [C#, .NET, NuGet, FFmpeg, OrmLite, JWT, Redis, GB28181/GB35114]
challenge: 各业务线重复建设下载、推流、抓图等基础能力，且信创数据库适配缺失。
solution: 实现中心下载 V2 与录像下载保活；直播推流兼容 CPU/GPU 双模式与多屏；OrmLite 达梦扩展；JWT token 缓存防 OOM；抓图协议参数化。
result: 基础能力统一沉淀并被多业务系统复用，信创（达梦）接入能力补齐，版本持续迭代。
tags: [基础库, 中心下载, 推流, OrmLite-DM, JWT]
order: 60
---
