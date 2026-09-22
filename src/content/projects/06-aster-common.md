---
title: Aster.Common 基础组件库
summary: 业务无关的基础功能库（aster.sync），通过私有 nuget 发布，支撑各业务系统的下载、推流与同步能力。
role: 核心贡献者
stack: [C#, .NET, NuGet, FFmpeg, OrmLite, JWT, Redis, GB28181/GB35114]
tags: [基础库, 中心下载, 推流, OrmLite-DM, JWT]
scope: 作为核心贡献者，负责基础组件库的中心下载 V2、录像下载、推流、OrmLite 达梦扩展等能力设计与开发，以私有 nuget 支撑多业务系统复用（含各基础能力接口与增删查改）。
features:
  - name: 中心下载 V2
    desc: ConcurrentDictionary 按平台缓存客户端管理器、Redis 进度回写 DB、TranscodeCfg 跨命名空间冲突与 HTTP/HTTPS 拦截处理
  - name: 录像下载
    desc: 保活逻辑、完成判断、回调事件、ffmpeg 命令拼接
  - name: 直播 / 推流
    desc: CPU/GPU 双推流、多屏主副屏、GPU 音频采集
  - name: OrmLite 达梦扩展
    desc: ormlite 支持 dm 扩展（信创方向）
  - name: 鉴权 / 抓图
    desc: JWT token 缓存防 OOM、抓图协议参数化
challenge: 各业务线重复建设下载、推流、抓图等基础能力，且信创数据库适配缺失。
solution: 实现中心下载 V2 与录像下载保活；直播推流兼容 CPU/GPU 双模式与多屏；OrmLite 达梦扩展；JWT token 缓存防 OOM；抓图协议参数化。
result: 基础能力统一沉淀并被多业务系统复用，信创（达梦）接入能力补齐，版本持续迭代。
order: 60
---
